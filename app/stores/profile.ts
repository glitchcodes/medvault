import { defineStore } from "pinia";
import { doc } from "firebase/firestore";

interface ProfileSchema {
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string|null;
}

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<ProfileSchema>();

  const fetchProfile = async () => {
    const db = useFirestore();
    const user = await getCurrentUser();

    useDocument(doc(db, 'profiles', user.uid), { target: profile, once: true });
  }

  const full_name = computed(() => {
    if (profile.value) {
      return `${profile.value.first_name} ${profile.value.last_name}`;
    }

    return '';
  });

  const avatar_url = computed(() => {
    if (profile.value && profile.value.avatar_url && profile.value.avatar_url.length > 0) {
      return profile.value.avatar_url;
    }

    return `https://ui-avatars.com/api/?name=${ encodeURIComponent(full_name.value) }`
  })

  return { profile, full_name, avatar_url, fetchProfile }
});