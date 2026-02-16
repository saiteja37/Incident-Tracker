export interface Incident {
  _id?: string;
  title: string;
  service: string;
  severity: 'SEV1' | 'SEV2' | 'SEV3' | 'SEV4';
  status: 'OPEN' | 'MITIGATED' | 'RESOLVED';
  owner?: string;
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
}
