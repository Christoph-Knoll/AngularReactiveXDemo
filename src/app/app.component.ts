import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, range, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rx-demo';
  subscription: Subscription

  ngOnInit(): void {
    // Synchronous
    // const observable$: Observable<number> = range(3, 5)
    // const subscription: Subscription = observable$.subscribe(
    //   (x) => console.log(observable$, 'Next: ' + x),
    //   (err) => console.log('Error ' + err),
    //   () => console.log('Completed')
    // )

    // Asynchronous
    const observable$: Observable<number> = interval(1000)
    this.subscription = observable$.subscribe(
      (x) => console.log(observable$, 'Next: ' + x),
      (err) => console.log('Error ' + err),
      () => console.log('Completed')
    )

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
