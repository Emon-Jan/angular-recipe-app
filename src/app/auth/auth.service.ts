import * as firebase from 'firebase';
import { Response } from '@angular/http';

export class AuthService {
    registerUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log('Error in register ' + error)
            );
        console.log('User Registered');

    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log('Error in signing ' + error)
            );
    }
}
