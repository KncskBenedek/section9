import { Component, } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService, private accountService: AccountService){
    this.accountService.statusUpdated.subscribe(
      (status: string)=>
      {
        alert("New status: " + status);
      }

    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);

  }
}
