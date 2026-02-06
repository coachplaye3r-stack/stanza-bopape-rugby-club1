
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  MANAGEMENT_ADMIN = 'MANAGEMENT_ADMIN',
  COACH = 'COACH',
  PLAYER = 'PLAYER',
  PARENT = 'PARENT',
  FAN = 'FAN'
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  approved: boolean;
  profilePhoto?: string;
  teamId?: string;
}

export interface PlayerProfile extends User {
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  position: string;
  ageGroup: string; // New field for U13, U15, U18
  jerseyNumber?: string;
  height?: string;
  weight?: string;
  achievements: string[];
  gallery: GalleryItem[];
}

export interface GalleryItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  caption: string;
  timestamp: string;
}

export interface Team {
  id: string;
  name: string;
  coachId: string;
  ageGroup: string;
  players: string[]; // User IDs
  fixtures: Fixture[];
  standings?: string;
}

export interface Fixture {
  id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'live' | 'completed';
  score?: { home: number; away: number };
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
  groupId: string;
}
