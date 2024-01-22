import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../home/service/home.service';
import { Room } from '../../../../models/room.inteface';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css'
})
export class RoomsPageComponent implements OnInit {

  data: Room[] = [];
  displayedColumns: string[] = ['id_room', 'room_number', 'room_price', 'room_status', 'actions'];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.homeService.getRooms().subscribe((result: any) =>{
      if(result.data){

        this.data = result.data
      }
    })
  }


}
