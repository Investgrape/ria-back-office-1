export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface Document {
  id: string;
  title: string;
  type: 'agreement' | 'policy' | 'report';
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  action: string;
  userId: string;
  details: string;
  timestamp: string;
}
