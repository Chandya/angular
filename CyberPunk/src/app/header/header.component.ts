import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../services/session.service';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  loginError: boolean;
  items: MenuItem[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private clientService: ClientService
  ) {
    this.loginError = false;
    this.items = new Array();
  }

  ngOnInit(): void {}

  clientLogin(): void {
    let client: Client | null = this.clientService.clientLogin(
      this.username,
      this.password
    );

    if (client != null) {
      this.sessionService.setIsLogin(true);
      this.sessionService.setCurrentClient(client);
      this.loginError = false;
      this.router.navigate(['/index']);
    } else {
      this.loginError = true;
    }
  }

  clientLogout(): void {
    this.sessionService.setIsLogin(false);
    this.sessionService.setCurrentClient(null);

    this.router.navigate(['/index']);
  }
}
