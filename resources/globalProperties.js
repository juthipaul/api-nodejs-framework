function globalProperties(params) {
    this.domainUrl="https://dock.preprod.ntp.net.in";
    this.authKey= 'Bearer {API_KEY}';
    
    this.domainUrlPreprod="https://staging.sunbirded.org";
    this.authKeyPreprod= 'Bearer {API_KEY}' ;
    this.authTokenPreprod= '{USER_ACCESS_TOKEN' ;
}
module.exports= new globalProperties();
