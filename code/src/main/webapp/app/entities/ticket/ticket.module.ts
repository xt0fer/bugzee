import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TicketComponent } from './list/ticket.component';
import { TicketUserComponent } from './listuser/ticketuser.component';
import { TicketDetailComponent } from './detail/ticket-detail.component';
import { TicketUpdateComponent } from './update/ticket-update.component';
import { TicketDeleteDialogComponent } from './delete/ticket-delete-dialog.component';
import { TicketRoutingModule } from './route/ticket-routing.module';

@NgModule({
  imports: [SharedModule, TicketRoutingModule],
  declarations: [TicketComponent, TicketUserComponent, TicketDetailComponent, TicketUpdateComponent, TicketDeleteDialogComponent],
  entryComponents: [TicketDeleteDialogComponent],
})
export class TicketModule {}
