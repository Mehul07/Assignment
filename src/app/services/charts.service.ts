import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getPieChartData() {
	  //Need a FileReader to read excel/csv and fetch data
    return this.http.get("assets/mockdata/charts/Bar.csv");
  }
}
