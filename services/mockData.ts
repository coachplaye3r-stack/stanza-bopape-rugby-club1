
import { UserRole, Team, User, Transaction, Fixture } from '../types';

export const MOCK_USERS: User[] = [
  { id: '1', email: 'admin@stanzabopape.co.za', fullName: 'Super Admin', role: UserRole.SUPER_ADMIN, approved: true },
  { id: '2', email: 'coach.thabang@gmail.com', fullName: 'Coach Thabang', role: UserRole.COACH, approved: true, teamId: 't1' },
  { id: '3', email: 'sibusiso@student.za', fullName: 'Sibusiso Khumalo', role: UserRole.PLAYER, approved: true, teamId: 't1' },
];

export const MOCK_TEAMS: Team[] = [
  {
    id: 't1',
    name: 'U18 Boys First XV',
    coachId: '2',
    ageGroup: 'U18',
    players: ['3'],
    fixtures: [
      { id: 'f1', opponent: 'Mamelodi Eagles', date: '2024-05-20', time: '14:00', location: 'Stanza Bopape Field 1', status: 'upcoming' },
      { id: 'f2', opponent: 'Pretoria Stallions', date: '2024-05-13', time: '10:00', location: 'Pretoria High', status: 'completed', score: { home: 24, away: 12 } }
    ]
  },
  {
    id: 't2',
    name: 'Senior Women',
    coachId: 'none',
    ageGroup: 'Senior',
    players: [],
    fixtures: []
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', date: '2024-05-01', description: 'Player Registration Fees', amount: 5000, type: 'income', category: 'Membership' },
  { id: 'tx2', date: '2024-05-05', description: 'Equipment - New Rugby Balls', amount: 1200, type: 'expense', category: 'Equipment' },
  { id: 'tx3', date: '2024-05-07', description: 'Sponsorship - local Bakery', amount: 2000, type: 'income', category: 'Sponsorship' },
];
