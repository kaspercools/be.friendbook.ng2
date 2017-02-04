import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { ProfileService } from '../services/profiles.service';
import {Profile} from '../models/profile.model';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector:'profile-edit',
    templateUrl:'./detail.component.html'
})
export class ProfileEditComponent implements OnInit, OnDestroy{
    private profile:Profile;
    private profileSubscription:Subscription;
    private paramSubscription:Subscription;
    private username:string;
    constructor(private profileService: ProfileService, private route: ActivatedRoute, private router:Router){
        this.profile = { username:'', name:'',surname:''};
    }

    ngOnInit(){
        this.readUsername();
        this.refreshData();
    }

    ngOnDestroy(){
        this.unsubscribe();
        if(this.paramSubscription){
            this.paramSubscription.unsubscribe();
        }
    }

    private readUsername(){
        this.paramSubscription = this.route.params.subscribe(params => {
            this.username = params['username'];
            // In a real app: dispatch action to load the details here.
        });
    }

    private unsubscribe(){
        if(this.profileSubscription){
            this.profileSubscription.unsubscribe();
        }
    }

    private refreshData(){
        this.unsubscribe();
        this.profileSubscription = this.profileService.getProfile(this.username).subscribe((profile)=>{
            this.profile = profile;
        })
    }

    save($event:any, detailForm:any){
        if(detailForm.valid){
            this.profileService.editProfile(this.username, this.profile).subscribe((profile:Profile)=>{
                this.router.navigate(['']);
            })
        }
    }

    delete(profile:Profile){
        this.profileService.deleteProfile(profile.username).subscribe(
            (prof)=>{
                //could show a completion message
                //fetch new data
                this.refreshData();
        });
    }
}

@Component({
    moduleId: module.id,
    selector:'profile-create',
    templateUrl:'./detail.component.html'
})
export class ProfileCreateComponent implements OnInit, OnDestroy{
    private profile:Profile;

    constructor(private profileService: ProfileService, private route: ActivatedRoute, private router:Router){
        this.profile = { username:'', name:'',surname:''};
    }

    ngOnInit(){
    
    }

    ngOnDestroy(){
     
    }

    save($event:any, detailForm:any){
        if(detailForm.valid){
            this.profileService.createProfile(this.profile).subscribe(()=>{
                
                this.router.navigate(['']);
            },
            (error:Observable<any>)=>{
                    console.error(error);
            },)
        }
    }

    delete(profile:Profile){
        this.profileService.deleteProfile(profile.username).subscribe(
            (prof)=>{
                //could show a completion message
                //fetch new data    
        });
    }
}