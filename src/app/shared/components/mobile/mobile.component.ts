import { Component, OnInit } from '@angular/core';
import { ImobileProduct } from '../../models/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
   mobileProducts : Array<ImobileProduct> = [
    {
      id: 1,
      name: 'Apple iPhone 13 (Starlight, 128 GB)',
      brand: 'Apple',
      price: '₹52,999',
      image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
      isAvailable: true,
      rating : 4.9,
      ram : "8GB",
      ROM : "128GB",
      display : "15.49 cm (6.1 inch) Super Retina XDR Display",
      camera : "12MP + 12MP | 12MP Front Camera",
      battery : "5000 mAh Battery"
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: '₹29999',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/o/c/-original-imagtnqjmfqxxbj2.jpeg?q=70',
      isAvailable: false,
      rating : 4.5,
      ram : "8GB",
      ROM : "128GB",
      display : "6.4 inch Dynamic AMOLED 3X",
      camera : "12MP + 12MP + 8MP(OIS) | 32MP Front Camera",
      battery : "4500 mAh Battery"
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      brand: 'Google',
      price: '₹43999',
      image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
      isAvailable: true,
      rating : 3.5,
      ram : "8GB",
      ROM : "128GB",
      display : "16.64 cm (6.55 inch) Full HD+ Display",
      camera : "50MP + 13MP | 32MP Front Camera",
      battery : "5000 mAh Battery"
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      price: '₹54,450',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/a/a/-original-imaggcee9rkgswbx.jpeg?q=70',
      isAvailable: true,
      rating : 2.5,
      ram : "8GB",
      ROM : "128GB",
      display : "17.02 cm (6.7 inch) Display",
      camera : "48MP Rear Camera",
      battery : "4500 mAh Battery"
    },
    {
      id: 5,
      name: 'Mi 11 Lite (Vinyl Black, 128 GB)',
      brand: 'Xiaomi',
      price: '₹23,999',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.8,
      ram : "8GB",
      ROM : "128GB",
      display : "16.64 cm (6.55 inch) Full HD+ Display",
      camera : "64MP + 8MP + 5MP | 16MP Front Camera",
      battery : "4250 mAh Li-Polymer Battery"
    },
    {
      id: 6,
      name: 'vivo T2 Pro 5G (New Moon Black)',
      brand: 'Vivo',
      price: '₹24,999',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70',
      isAvailable: true,
      rating : 2.5,
      ram : "8GB",
      ROM : "128GB",
      display : "17.22 cm (6.78 inch) Full HD+ Display",
      camera : "64MP + 2MP | 16MP Front Camera",
      battery : "4600 mAh Battery"
    },
    {
      id: 7,
      name: 'realme 12 Pro 5G (Navigator Beige, 128 GB)',
      brand: 'realme',
      price: '₹24,999',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/p/y/12-pro-5g-rmx3842-realme-original-imagxgnhafyjz8rb.jpeg?q=70',
      isAvailable: true,
      rating : 4.4,
      ram : "8GB",
      ROM : "128GB",
      display : "17.02 cm (6.7 inch) Full HD+ Display",
      camera : "50MP + 8MP + 32MP | 16MP Front Camera",
      battery : "5000 mAh Battery"
    },
    {
      id: 8,
      name: 'Honor 8 Pro (Midnight Black)',
      brand: 'Huawei',
      price: '₹29,999',
      image: '',
      isAvailable: true,
      rating : 3.5,
      ram : "8GB",
      ROM : "128GB",
      display : "14.48 cm (5.7 inch) Quad HD Display",
      camera : "12MP + 12MP | 8MP Front Camera",
      battery : "4000 mAh Battery"
    },
    {
      id: 9,
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      price: '₹249',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.5,
      ram : "8GB",
      ROM : "128GB",
      display : "16.64 cm (6.55 inch) Full HD+ Display",
      camera : "50MP + 13MP | 32MP Front Camera",
      battery : "5000 mAh Battery"
    },
    {
      id: 10,
      name: 'Nokia 8.3',
      brand: 'Nokia',
      price: '₹499',
      image: '',
      isAvailable: true,
      rating : 4.5,
      ram : "8GB",
      ROM : "128GB",
      display : "16.64 cm (6.55 inch) Full HD+ Display",
      camera : "50MP + 13MP | 32MP Front Camera",
      battery : "5000 mAh Battery"
    },
    {
      id: 11,
      name: 'Motorola Edge 40 Neo',
      brand: 'Moto',
      price: '₹22999',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/5/k/-original-imagtkzut72y6ddg.jpeg?q=70&crop=false',
      isAvailable: true,
      rating : 4.5,
      ram : "12GB",
      ROM : "256GB",
      display : "16.64 cm (6.55 inch) Full HD+ Display",
      camera : "50MP + 13MP | 32MP Front Camera",
      battery : "5000 mAh Battery"
    }
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
