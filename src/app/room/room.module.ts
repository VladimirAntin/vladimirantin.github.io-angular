import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {LiveChatComponent} from './live-chat/live-chat.component';
import {RoomComponent} from './room.component';
import { LoginRoomComponent } from './login-room/login-room.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [RoomComponent, LiveChatComponent, LoginRoomComponent],
  exports: [RoomComponent, LiveChatComponent, LoginRoomComponent],
  entryComponents: [LoginRoomComponent]
})
export class RoomModule { }
