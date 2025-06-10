import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  role: 'client' | 'support' | null = null;
  name: string = '';
}
