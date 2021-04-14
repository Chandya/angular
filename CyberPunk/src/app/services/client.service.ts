import { Injectable } from '@angular/core';

import { Client } from '../models/client';
import { AccessRightEnum } from '../enums/access-right-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[];

  constructor() {
    this.clients = new Array();
    let client: Client;
    client = new Client(
      1,
      'DBS',
      '123',
      'a@b',
      AccessRightEnum.STANDARD,
      '123456',
      123,
      'regini',
      'password',
      '01/09/2020',
      3
    );
    this.clients.push(client);
    client = new Client(
      1,
      'Adidas',
      '479',
      'b@c',
      AccessRightEnum.STANDARD,
      '456789',
      345,
      'chandya',
      'password',
      '01/08/2023',
      10
    );
    this.clients.push(client);
    client = new Client(
      1,
      'KPMG',
      '678',
      'c@d',
      AccessRightEnum.STANDARD,
      '344554',
      456,
      'ayush',
      'password',
      '05/08/2026',
      7
    );
    this.clients.push(client);
    client = new Client(
      1,
      'CitiBank',
      '345',
      'd@e',
      AccessRightEnum.PREMIUM,
      '4534536',
      567,
      'jiaqi',
      'password',
      '01/05/2024',
      11
    );
    this.clients.push(client);
  }

  clientLogin(
    username: string | undefined,
    password: string | undefined
  ): Client | null {
    for (let client of this.clients) {
      if (client.username == username && client.password == password) {
        return client;
      }
    }

    return null;
  }
}
