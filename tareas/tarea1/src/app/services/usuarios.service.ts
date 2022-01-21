import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarios(){

    return [
      {
        "id": 479,
        "uid": "7475d402-e443-4543-8104-835008e60f25",
        "password": "oqjAG0CNKr",
        "first_name": "Carletta",
        "last_name": "Schimmel",
        "username": "carletta.schimmel",
        "email": "carletta.schimmel@email.com",
        "avatar": "https://robohash.org/etnihilvoluptate.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+386 584.285.6492",
        "social_insurance_number": "341967230",
        "date_of_birth": "1994-01-31",
        "employment": {
          "title": "Customer Strategist",
          "key_skill": "Technical savvy"
        },
        "address": {
          "city": "Lake Corinashire",
          "street_name": "Tasia Isle",
          "street_address": "5739 Refugio Mount",
          "zip_code": "04786-7886",
          "state": "Delaware",
          "country": "United States",
          "coordinates": {
            "lat": 14.561272544334443,
            "lng": 67.6337403460158
          }
        },
        "credit_card": {
          "cc_number": "5454-7751-0161-4193"
        },
        "subscription": {
          "plan": "Gold",
          "status": "Pending",
          "payment_method": "Visa checkout",
          "term": "Annual"
        }
      },
      {
        "id": 6877,
        "uid": "1e60f5f7-b393-4d5f-83a5-699fee087708",
        "password": "fMTOnau2BQ",
        "first_name": "Juan",
        "last_name": "Skiles",
        "username": "juan.skiles",
        "email": "juan.skiles@email.com",
        "avatar": "https://robohash.org/aperiamaliquidminima.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+507 1-764-873-2439 x86687",
        "social_insurance_number": "380172197",
        "date_of_birth": "1990-04-09",
        "employment": {
          "title": "Dynamic Technician",
          "key_skill": "Work under pressure"
        },
        "address": {
          "city": "Lake Stefanyton",
          "street_name": "Auer Cove",
          "street_address": "438 Providencia Coves",
          "zip_code": "23754-8416",
          "state": "Wisconsin",
          "country": "United States",
          "coordinates": {
            "lat": 89.45407203501418,
            "lng": 64.26461051193797
          }
        },
        "credit_card": {
          "cc_number": "4277297716383"
        },
        "subscription": {
          "plan": "Basic",
          "status": "Blocked",
          "payment_method": "WeChat Pay",
          "term": "Annual"
        }
      },
      {
        "id": 2539,
        "uid": "db49099d-d7dd-400f-81ab-423fa1018455",
        "password": "OG1uIqanzS",
        "first_name": "Herb",
        "last_name": "Walsh",
        "username": "herb.walsh",
        "email": "herb.walsh@email.com",
        "avatar": "https://robohash.org/velexercitationemratione.png?size=300x300&set=set1",
        "gender": "Agender",
        "phone_number": "+963 537.730.9935 x69147",
        "social_insurance_number": "350500393",
        "date_of_birth": "1996-12-07",
        "employment": {
          "title": "Farming Facilitator",
          "key_skill": "Problem solving"
        },
        "address": {
          "city": "Pollichberg",
          "street_name": "Dickinson Extensions",
          "street_address": "2439 Dietrich Mountain",
          "zip_code": "23258-6842",
          "state": "New Mexico",
          "country": "United States",
          "coordinates": {
            "lat": -72.41347342873826,
            "lng": 70.90456882148624
          }
        },
        "credit_card": {
          "cc_number": "5259-1032-0105-7188"
        },
        "subscription": {
          "plan": "Bronze",
          "status": "Idle",
          "payment_method": "Apple Pay",
          "term": "Payment in advance"
        }
      }
    ];

  }

}
