import { getCurrentUser } from "@/lib/appwrite";
import { User } from "@/type";
import { create } from "zustand";

type AuthStore = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  fetchAuthenticatedUser: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),

  user: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  setIsLoading: (isLoading) => set({ isLoading }),

  fetchAuthenticatedUser: async () => {
    try {
      const user = await getCurrentUser();
      if (user) set({ isAuth: true, user: user as User });
      else set({ isAuth: false, user: null });
    } catch (error) {
      console.log("Error fetching authenticated user:", error);
      set({ isAuth: false, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));
