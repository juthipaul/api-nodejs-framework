function pathURLs()
{
    this.contentReadPath="content/v1/read/do_31321401593029427218";
    this.userCreatePath="/api/user/v1/signup";
    this.userRead="/api/user/v2/read/4f83a9d9-f063-48c1-a28a-687a21f5bc0b";
    this.tokenGeneration="/auth/realms/sunbird/protocol/openid-connect/token";
    this.programCreate="/api/program/v1/create";
    this.programRead="/content/program/v1/read/";
    this.programList="/content/program/v1/list";
    this.getListCategories="/discussion/categories";
    this.fetchNodebbUserDetails="/discussion/user/adarshr_l1uq";
    this.createNewGroup="/learner/group/v1/create";
    //this.joinGroup="";
    this.getForumId="/discussion/forum/v2/read";
}

module.exports = new pathURLs();