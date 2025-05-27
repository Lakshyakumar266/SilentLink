import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { firestore } from './config/firebase';

export default function TestFirestore() {
  useEffect(() => {
    async function fetchChats() {
      const chatsCol = collection(firestore, 'chats');
      const chatsSnapshot = await getDocs(chatsCol);
      const chatsList = chatsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Chats:', chatsList);
    }
    fetchChats();
  }, []);

  return ("ok");
}
