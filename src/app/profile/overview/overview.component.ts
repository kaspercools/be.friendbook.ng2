import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { ProfileService } from '../services/profiles.service';
import {Profile} from '../models/profile.model';

@Component({
    moduleId: module.id,
    selector:'profile-overview',
    templateUrl:'./overview.component.html'
})
export class ProfileOverviewComponent implements OnInit, OnDestroy{
    private profiles:Profile;
    private profilesSubscription:Subscription;

    constructor(private profileService: ProfileService ){
    }

    ngOnInit(){
        this.refreshData();
    }

    ngOnDestroy(){
        this.unsubscribe();
    }

    private unsubscribe(){
        if(this.profilesSubscription){
            this.profilesSubscription.unsubscribe();
        }
    }

    private refreshData(){
        this.unsubscribe();
        this.profilesSubscription = this.profileService.getProfiles().subscribe((profiles)=>{
            this.profiles = profiles;
        })
    }

    
}