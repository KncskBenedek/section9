import { Component,  Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LoggingService, private accountServie: AccountService){
 
  }

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    this.accountServie.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}
