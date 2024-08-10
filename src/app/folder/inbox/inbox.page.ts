import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inboxes = [
    {
      "id": 1,
      "title": "Nak Makan Apa Luch",
      "from": "Sahyro",
      "dt": "11/8/2024",
    },
    {
      "id": 2,
      "title": "Android Technical Class",
      "from": "Yayasan Peneraju",
      "dt": "8/8/2024",
    },
    {
      "id": 3,
      "title": "Booking confirmed",
      "from": "Agoda",
      "dt": "2/8/2024",
    },
  ]

}
