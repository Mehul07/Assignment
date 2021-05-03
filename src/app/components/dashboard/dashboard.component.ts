/// <reference types="@types/googlemaps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { } from 'google.maps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('gmap', {static: false}) gmapElement: ElementRef;
  map: google.maps.Map;
  markerIcon = {
    url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
    scaledSize: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(32,65),
    labelOrigin: new google.maps.Point(40,33),
    fillColor: 'blue'
  };
  myLatLng = { lat: -25.363, lng: 131.044 };

  ngAfterViewInit() {
    var mapProp = {
      center: new google.maps.LatLng(-25.363,  131.044),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var markerLabel = 'GO!';
    var marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.myLatLng,
      icon: this.markerIcon,
      label: markerLabel,
      title: JSON.stringify(this.myLatLng) + "First Marker"
    });

    marker.setMap(this.map);
  }

}
