if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const c=e=>i(e,l),u={module:{uri:l},exports:a,require:c};s[l]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/airbnb-259827bb.png",revision:null},{url:"assets/bookshelf-1-3134122b.webp",revision:null},{url:"assets/bookshelf-1-6afa74dd.png",revision:null},{url:"assets/CertificateSection-c1b01121.js",revision:null},{url:"assets/ExperienceSection-cf2e5050.js",revision:null},{url:"assets/Footer-e02fc7d7.js",revision:null},{url:"assets/ic_192-9ff02a5b.png",revision:null},{url:"assets/ic-dicoding-3342303e.png",revision:null},{url:"assets/ic-hackerrank-df0b0198.png",revision:null},{url:"assets/ic-ruangguru-f3323ed7.png",revision:null},{url:"assets/ic-udemy-6ee3b8b9.png",revision:null},{url:"assets/iconBase-475ea921.js",revision:null},{url:"assets/index-0d39e427.css",revision:null},{url:"assets/index-837f8c1e.js",revision:null},{url:"assets/landing-page-1-32e06c65.png",revision:null},{url:"assets/landing-page-1-879f5aa8.webp",revision:null},{url:"assets/Layout-5ba806b6.js",revision:null},{url:"assets/lenicon-4684b4b9.png",revision:null},{url:"assets/Navbar-0c2ed23f.js",revision:null},{url:"assets/nobarkuy-preview-1-acba1fa5.webp",revision:null},{url:"assets/nobarkuy-preview-1-ef26a949.png",revision:null},{url:"assets/Notfound-f7861882.js",revision:null},{url:"assets/Ontime-3c18b91e.png",revision:null},{url:"assets/Ontime-deef476c.webp",revision:null},{url:"assets/profile-picture-2-2a30e92d.png",revision:null},{url:"assets/profile-picture-2-77fdabc4.webp",revision:null},{url:"assets/ProfileBar-859bd5f9.js",revision:null},{url:"assets/ProjectSection-2a39622b.js",revision:null},{url:"assets/sipardi-53a633f1.png",revision:null},{url:"assets/SkillSection-0120ac70.js",revision:null},{url:"assets/vcsimg-ac67aa05.png",revision:null},{url:"assets/warkopbae-41476ee1.webp",revision:null},{url:"assets/warkopbae-e4674517.png",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"hand.png",revision:"068fced4cf8e95aa1ecd597ed0273eea"},{url:"ic_1024.png",revision:"d1cd2d5cdc45476d0ad07d6f37f163aa"},{url:"ic_144.png",revision:"27c754c1932478d2661a5656ae0ba00f"},{url:"ic_192.png",revision:"fca7b9151f454681bff2aa6418e9bccc"},{url:"ic_48.png",revision:"77c1ae71a1b46caca01473d80c383b11"},{url:"ic_512.png",revision:"bbbc6c6d32cf4917dbc44a9290f75c4d"},{url:"ic_72.png",revision:"c197cf7580440ce1963a5e08c7e81dad"},{url:"ic_92.png",revision:"459d447039a59d2c22ce3e6d42513b49"},{url:"index.html",revision:"92faeccab825f00098c51e044d3fccae"},{url:"ic_48.png",revision:"77c1ae71a1b46caca01473d80c383b11"},{url:"ic_72.png",revision:"c197cf7580440ce1963a5e08c7e81dad"},{url:"ic_92.png",revision:"459d447039a59d2c22ce3e6d42513b49"},{url:"ic_144.png",revision:"27c754c1932478d2661a5656ae0ba00f"},{url:"ic_192.png",revision:"fca7b9151f454681bff2aa6418e9bccc"},{url:"ic_512.png",revision:"bbbc6c6d32cf4917dbc44a9290f75c4d"},{url:"ic_1024.png",revision:"d1cd2d5cdc45476d0ad07d6f37f163aa"},{url:"manifest.webmanifest",revision:"bd77746e9b062381283b8d82c559ef59"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
