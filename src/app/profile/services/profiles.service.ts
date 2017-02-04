import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Profile} from '../models/profile.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService{
    private url:string = "http://localhost:8080/be.friendbook.api/api";

    constructor(private http:Http){
    }

    getProfiles(){
        return this.http.get(
            this.url+'/profiles')
            .map((res:Response)=>{return res.json()})
    }

    

    getProfile(username:string){
        return this.http.get(
            this.url+'/profiles/'+username)
            .map((res:Response)=>{return res.json()})
    }

    deleteProfile(username:string){
        console.log(username);
        return this.http.delete(
            this.url+'/profiles/'+username);
    }

    createProfile(profile:Profile){
        return this.http.put(
            this.url+'/profiles', profile)
            .map((res:Response)=>{return res})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    editProfile(username:string, profile:Profile){
        return this.http.post(
            this.url+'/profiles/'+username, profile)
            .map((res:Response)=>{return res.json()})
    }
}


