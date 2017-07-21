/**
 * Created by Linweiwei on 2016/12/22.
 */
import {Component, OnInit} from "@angular/core";
import {BaseService} from "../service/base.service";
@Component({
    selector:"my-dashboard",
    templateUrl:"dashboard.component.html"
})

export class DashboardComponent implements OnInit{
	public rename: string;
	constructor(private baseService: BaseService){}

    ngOnInit(): void {

    }

    add(name:string) {
        let url = "api/user/"+name;
        this.baseService.get(url)
            .subscribe(
                (response) => {
                  	console.log(response);
                  	this.rename=response.issuccess
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("complete");
                }
            )
    }
}