import React from 'react';
import { Community } from '@/atoms/communitiesAtom';
import { firestore } from '@/services/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import safeJsonStringify from 'safe-json-stringify';

interface ICommunityPage {
  params: {
    communityId: string;
  };
}

const CommunityPage = async ({ params: { communityId } }: ICommunityPage) => {
  const communityDocRef = doc(firestore, 'communities', communityId);
  const communityDoc = await getDoc(communityDocRef);
  const communityData: Community = JSON.parse(
    safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
  );

  console.log(communityData);
  return <div>Community Page {communityData.id}</div>;
};

export default CommunityPage;
