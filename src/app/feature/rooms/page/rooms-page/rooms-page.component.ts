import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../home/service/home.service';
import { Room } from '../../../../models/room.inteface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css'
})
export class RoomsPageComponent implements OnInit, OnDestroy {

  loadRooms: Subscription

  data: Room[] = [];
  displayedColumns: string[] = ['id_room', 'room_number', 'room_price', 'room_vip', 'room_status', 'actions'];

  constructor(private homeService: HomeService) {
    this.loadRooms = new Subscription();
  }
  

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loadRooms = this.homeService.getRooms().subscribe((result: any) =>{
      if(result.data){

        this.data = result.data;
        
        
      }
    })
  }

  ngOnDestroy(): void {
    if (this.loadRooms){
      this.loadRooms.unsubscribe();
    }
  }


}
