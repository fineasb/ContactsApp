import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from '../shared.selector';
import { SharedState } from '../shared.state';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  showLoading: Observable<boolean>;

  constructor(private store: Store<SharedState>) { }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }

}
