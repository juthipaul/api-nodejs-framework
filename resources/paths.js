function pathURLs()
{

    this.tokenGeneration="/auth/realms/sunbird/protocol/openid-connect/token";
    this.programCreate="/api/program/v1/create";
    this.programRead="/content/program/v1/read/";
    this.programList="/content/program/v1/list";
    this.getListCategories="/discussion/categories";
    this.fetchNodebbUserDetails="/discussion/user/adarshr_l1uq";
    this.createNewGroup="/learner/group/v1/create";
    this.getForumId="/discussion/forum/v2/read";
}

module.exports = new pathURLs();
