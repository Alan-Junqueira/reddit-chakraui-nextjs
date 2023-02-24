import React from 'react';
import { Community } from '@/atoms/communitiesAtom';
import { firestore } from '@/services/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import safeJsonStringify from 'safe-json-stringify';
import { NotFoundCommunity } from '@/components/Community/NotFound';
import { HeaderCommunity } from '@/components/Community/Header';

interface ICommunityPage {
  params: {
    communityId: string;
  };
}

const CommunityPage = async ({ params: { communityId } }: ICommunityPage) => {
  const communityDocRef = doc(firestore, 'communities', communityId);
  const communityDoc = await getDoc(communityDocRef);
  const communityData: Community = communityDoc.exists()
    ? JSON.parse(
        safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
      )
    : '';

  console.log(communityData);

  if (!communityData) {
    return <NotFoundCommunity />;
  }
  return (
    <>
      <HeaderCommunity communityData={communityData} />
    </>
  );
};

export default CommunityPage;
