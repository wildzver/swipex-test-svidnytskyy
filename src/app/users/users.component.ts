import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserList} from '../shared/models/user-list';
import {UserService} from '../shared/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: UserList;
  currentPage;
  routeSubscription: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.routeSubscription = route.queryParamMap.subscribe(params => {
      this.currentPage = params.has('page') ? params.get('page') : 1;
      this.getUsers();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private getUsers(): void {
    this.userService.getUsersPage(this.currentPage).subscribe(resp => {
      this.users = resp.body;
    });
  }

  get pages(): Array<any> {
    return this.users?.total_pages ? new Array(this.users.total_pages) : new Array();
  }
}
