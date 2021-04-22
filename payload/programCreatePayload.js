import supertest from 'supertest';
var prop = require ("../resources/globalProperties.js");
var path = require ("../resources/paths.js");

function programCreate() {

        this.programCreateData =
        {
            "request": {
                "name": "First Program 101 API",
                "description": "Second Program 200",
                "nomination_enddate": "2020-12-28T18:30:00.000Z",
                "shortlisting_enddate": "2020-12-28T18:30:00.000Z",
                "content_submission_enddate": "2020-12-28T18:30:00.000Z",
                "createdBy": "ad1d9730-d79d-4724-b378-0279c55815fd",
                "content_types": [
                    "LearningActivity",
                    "TeachingMethod",
                    "FocusSpot"
                ],
                "sourcing_org_name": "Dockers",
                "template_id": "template1",
                "rootorg_id": "0126796199493140480",
                "createdby": "ab467e6e-1f32-453c-b1d8-c6b5fa6c7b9e",
                "createdon": "2020-05-16T00:19:14.086Z",
                "startdate": "2020-05-16T00:19:14.086Z",
                "slug": "sunbird",
                "status": "Live",
                "type": "public",
                "default_roles": [
                    "CONTRIBUTOR"
                ],
                "enddate": "2020-12-28T18:30:00.000Z",
                "config": {
                    "_comments": "",
                    "loginReqired": true,
                    "framework": "NCFCOPY",
                    "board": "CBSE",
                    "gradeLevel": [
                        "Class 1"
                    ],
                    "medium": [
                        "English"
                    ],
                    "subject": [
                        "English"
                    ],
                    "roles": [
                        {
                            "id": 1,
                            "name": "CONTRIBUTOR",
                            "default": true,
                            "defaultTab": 1,
                            "tabs": [
                                1
                            ]
                        },
                        {
                            "id": 2,
                            "name": "REVIEWER",
                            "defaultTab": 2,
                            "tabs": [
                                2
                            ]
                        }
                    ],
                    "header": {
                        "id": "ng.sunbird.header",
                        "ver": "1.0",
                        "compId": "headerComp",
                        "author": "Venkat",
                        "description": "",
                        "publishedDate": "",
                        "data": {},
                        "config": {
                            "tabs": [
                                {
                                    "index": 1,
                                    "label": "Contribute",
                                    "onClick": "collectionComponent"
                                },
                                {
                                    "index": 2,
                                    "label": "Review",
                                    "onClick": "collectionComponent"
                                },
                                {
                                    "index": 3,
                                    "label": "Dashboard",
                                    "onClick": "dashboardComponent"
                                }
                            ]
                        }
                    },
                    "components": [
                        {
                            "id": "ng.sunbird.collection",
                            "ver": "1.0",
                            "compId": "collectionComponent",
                            "author": "Venkat",
                            "description": "",
                            "publishedDate": "",
                            "data": {},
                            "config": {
                                "filters": {
                                    "implicit": [
                                        {
                                            "code": "framework",
                                            "defaultValue": "NCFCOPY",
                                            "label": "Framework"
                                        },
                                        {
                                            "code": "board",
                                            "defaultValue": "NCERT",
                                            "label": "Board"
                                        },
                                        {
                                            "code": "medium",
                                            "defaultValue": [
                                                "English"
                                            ],
                                            "label": "Medium"
                                        }
                                    ],
                                    "explicit": [
                                        {
                                            "code": "gradeLevel",
                                            "range": [
                                                "Kindergarten",
                                                "Grade 1",
                                                "Grade 2",
                                                "Grade 3"
                                            ],
                                            "label": "Class",
                                            "multiselect": false,
                                            "defaultValue": [
                                                "Kindergarten",
                                                "Grade 1"
                                            ],
                                            "visibility": true
                                        },
                                        {
                                            "code": "subject",
                                            "range": [
                                                "English",
                                                "Mathematics",
                                                "Hindi"
                                            ],
                                            "label": "Subject",
                                            "multiselect": false,
                                            "defaultValue": [
                                                "English"
                                            ],
                                            "visibility": true
                                        }
                                    ]
                                },
                                "groupBy": {
                                    "value": "subject",
                                    "defaultValue": "subject"
                                },
                                "collectionType": "Textbook",
                                "collectionList": [],
                                "status": [
                                    "Draft",
                                    "Live"
                                ]
                            }
                        },
                        {
                            "id": "ng.sunbird.chapterList",
                            "ver": "1.0",
                            "compId": "chapterListComponent",
                            "author": "Kartheek",
                            "description": "",
                            "publishedDate": "",
                            "data": {},
                            "config": {
                                "contentTypes": {
                                    "value": [
                                        {
                                            "id": "explanationContent",
                                            "label": "Explanation",
                                            "onClick": "uploadComponent",
                                            "mimeType": [
                                                "application/pdf"
                                            ],
                                            "metadata": {
                                                "name": "Explanation Resource",
                                                "description": "ExplanationResource",
                                                "resourceType": "Read",
                                                "contentType": "ExplanationResource",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553051403878414/artifact/explanation.thumb_1576602846206.png",
                                                "marks": 5
                                            },
                                            "filesConfig": {
                                                "accepted": "pdf",
                                                "size": "50"
                                            }
                                        },
                                        {
                                            "id": "experientialContent",
                                            "label": "Experiential",
                                            "onClick": "uploadComponent",
                                            "mimeType": [
                                                "video/mp4"
                                            ],
                                            "metadata": {
                                                "name": "Experiential Resource",
                                                "description": "ExperientialResource",
                                                "resourceType": "Read",
                                                "contentType": "ExperientialResource",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553051403878414/artifact/explanation.thumb_1576602846206.png",
                                                "marks": 5
                                            },
                                            "filesConfig": {
                                                "accepted": "mp4",
                                                "size": "50"
                                            }
                                        },
                                        {
                                            "id": "focusSpotContent",
                                            "label": "FocusSpot",
                                            "onClick": "uploadComponent",
                                            "mimeType": [
                                                "application/pdf"
                                            ],
                                            "metadata": {
                                                "name": "FocusSpot Resource",
                                                "description": "FocusSpot",
                                                "resourceType": "Read",
                                                "contentType": "FocusSpot",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21291553100098764812/artifact/focus-spot_1561727473311.thumb_1576602905573.png",
                                                "marks": 5
                                            },
                                            "filesConfig": {
                                                "accepted": "pdf",
                                                "size": "50"
                                            }
                                        },
                                        {
                                            "id": "vsaPracticeQuestionContent",
                                            "label": "VSA - Practice Sets",
                                            "onClick": "questionSetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Practice QuestionSet",
                                                "description": "Practice QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "PracticeQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "vsa"
                                            ]
                                        },
                                        {
                                            "id": "saPracticeQuestionContent",
                                            "label": "SA - Practice Sets",
                                            "onClick": "questionSetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Practice QuestionSet",
                                                "description": "Practice QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "PracticeQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "sa"
                                            ]
                                        },
                                        {
                                            "id": "laPracticeQuestionContent",
                                            "label": "LA - Practice Sets",
                                            "onClick": "questionSetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Practice QuestionSet",
                                                "description": "Practice QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "PracticeQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "la"
                                            ]
                                        },
                                        {
                                            "id": "mcqPracticeQuestionContent",
                                            "label": "MCQ - Practice Sets",
                                            "onClick": "questionSetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Practice QuestionSet",
                                                "description": "Practice QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "PracticeQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "mcq"
                                            ]
                                        },
                                        {
                                            "id": "curiositySetContent",
                                            "label": "Curiosity Sets",
                                            "onClick": "curiositySetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Curiosity QuestionSet",
                                                "description": "Curiosity QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "CuriosityQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "curiosity"
                                            ]
                                        }
                                    ],
                                    "defaultValue": [
                                        {
                                            "id": "vsaPracticeQuestionContent",
                                            "label": "Practice Sets",
                                            "onClick": "questionSetComponent",
                                            "mimeType": [
                                                "application/vnd.ekstep.ecml-archive"
                                            ],
                                            "metadata": {
                                                "name": "Practice QuestionSet",
                                                "description": "Practice QuestionSet",
                                                "resourceType": "Learn",
                                                "contentType": "PracticeQuestionSet",
                                                "audience": [
                                                    "Learner"
                                                ],
                                                "appIcon": "",
                                                "marks": 5
                                            },
                                            "questionCategories": [
                                                "vsa"
                                            ]
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "id": "ng.sunbird.uploadComponent",
                            "ver": "1.0",
                            "compId": "uploadContentComponent",
                            "author": "Kartheek",
                            "description": "",
                            "publishedDate": "",
                            "data": {},
                            "config": {
                                "filesConfig": {
                                    "accepted": "pdf, mp4, webm, youtube",
                                    "size": "50"
                                },
                                "formConfiguration": [
                                    {
                                        "code": "learningOutcome",
                                        "dataType": "list",
                                        "description": "Learning Outcomes For The Content",
                                        "editable": true,
                                        "inputType": "multiselect",
                                        "label": "Learning Outcome",
                                        "name": "LearningOutcome",
                                        "placeholder": "Select Learning Outcomes",
                                        "required": false,
                                        "visible": true
                                    },
                                    {
                                        "code": "bloomslevel",
                                        "dataType": "list",
                                        "description": "Learning Level For The Content",
                                        "editable": true,
                                        "inputType": "select",
                                        "label": "Learning Level",
                                        "name": "LearningLevel",
                                        "placeholder": "Select Learning Levels",
                                        "required": true,
                                        "visible": true,
                                        "defaultValue": [
                                            "remember",
                                            "understand",
                                            "apply",
                                            "analyse",
                                            "evaluate",
                                            "create"
                                        ]
                                    },
                                    {
                                        "code": "creator",
                                        "dataType": "text",
                                        "description": "Enter The Author Name",
                                        "editable": true,
                                        "inputType": "text",
                                        "label": "Author",
                                        "name": "Author",
                                        "placeholder": "Enter Author Name",
                                        "required": true,
                                        "visible": true
                                    },
                                    {
                                        "code": "license",
                                        "dataType": "list",
                                        "description": "License For The Content",
                                        "editable": true,
                                        "inputType": "select",
                                        "label": "License",
                                        "name": "License",
                                        "placeholder": "Select License",
                                        "required": true,
                                        "visible": true
                                    }
                                ],
                                "resourceTitleLength": "200",
                                "tenantName": "SunbirdEd"
                            }
                        },
                        {
                            "id": "ng.sunbird.practiceSetComponent",
                            "ver": "1.0",
                            "compId": "practiceSetComponent",
                            "author": "Kartheek",
                            "description": "",
                            "publishedDate": "",
                            "data": {},
                            "config": {
                                "No of options": 4,
                                "solutionType": [
                                    "Video",
                                    "Text & image"
                                ],
                                "questionCategory": [
                                    "vsa",
                                    "sa",
                                    "ls",
                                    "mcq",
                                    "curiosity"
                                ],
                                "formConfiguration": [
                                    {
                                        "code": "learningOutcome",
                                        "dataType": "list",
                                        "description": "Learning Outcomes For The Content",
                                        "editable": true,
                                        "inputType": "multiselect",
                                        "label": "Learning Outcome",
                                        "name": "LearningOutcome",
                                        "placeholder": "Select Learning Outcomes",
                                        "required": false,
                                        "visible": true
                                    },
                                    {
                                        "code": "bloomsLevel",
                                        "dataType": "list",
                                        "description": "Learning Level For The Content",
                                        "editable": true,
                                        "inputType": "multiselect",
                                        "label": "Learning Level",
                                        "name": "LearningLevel",
                                        "placeholder": "Select Learning Levels",
                                        "required": true,
                                        "visible": true,
                                        "defaultValue": [
                                            "remember",
                                            "understand",
                                            "apply",
                                            "analyse",
                                            "evaluate",
                                            "create"
                                        ]
                                    },
                                    {
                                        "code": "creator",
                                        "dataType": "text",
                                        "description": "Enter The Author Name",
                                        "editable": true,
                                        "inputType": "text",
                                        "label": "Author",
                                        "name": "Author",
                                        "placeholder": "Enter Author Name",
                                        "required": true,
                                        "visible": true
                                    },
                                    {
                                        "code": "license",
                                        "dataType": "list",
                                        "description": "License For The Content",
                                        "editable": true,
                                        "inputType": "select",
                                        "label": "License",
                                        "name": "License",
                                        "placeholder": "Select License",
                                        "required": true,
                                        "visible": true
                                    }
                                ],
                                "resourceTitleLength": "200",
                                "tenantName": "",
                                "assetConfig": {
                                    "image": {
                                        "size": "50",
                                        "accepted": "jpeg, png, jpg"
                                    },
                                    "video": {
                                        "size": "50",
                                        "accepted": "pdf, mp4, webm, youtube"
                                    }
                                }
                            }
                        },
                        {
                            "id": "ng.sunbird.dashboard",
                            "ver": "1.0",
                            "compId": "dashboardComp",
                            "author": "Venkanna Gouda",
                            "description": "",
                            "publishedDate": "",
                            "data": {},
                            "config": {}
                        }
                    ],
                    "actions": {
                        "showCountPanel": {
                            "roles": [
                                1,
                                2
                            ]
                        },
                        "showContribution": {
                            "roles": [
                                1
                            ]
                        },
                        "showUpforReview": {
                            "roles": [
                                2
                            ]
                        },
                        "showTotalContribution": {
                            "roles": [
                                1
                            ]
                        },
                        "showMyContribution": {
                            "roles": [
                                1
                            ]
                        },
                        "showRejected": {
                            "roles": [
                                1
                            ]
                        },
                        "showUnderReview": {
                            "roles": [
                                1
                            ]
                        },
                        "showTotalUnderReview": {
                            "roles": [
                                2
                            ]
                        },
                        "showAawaitingReview": {
                            "roles": [
                                2
                            ]
                        },
                        "showFilters": {
                            "roles": [
                                1,
                                2,
                                3
                            ]
                        },
                        "showAddResource": {
                            "roles": [
                                1
                            ]
                        },
                        "showEditResource": {
                            "roles": [
                                1
                            ]
                        },
                        "showMoveResource": {
                            "roles": [
                                1
                            ]
                        },
                        "showDeleteResource": {
                            "roles": [
                                1
                            ]
                        },
                        "showPreviewResource": {
                            "roles": [
                                2
                            ]
                        },
                        "showDashboard": {
                            "roles": [
                                3
                            ]
                        },
                        "showCert": {
                            "roles": [
                                4
                            ]
                        },
                        "showSave": {
                            "roles": [
                                1
                            ]
                        },
                        "showEdit": {
                            "roles": [
                                1
                            ]
                        },
                        "showChangeFile": {
                            "roles": [
                                1
                            ]
                        },
                        "showRequestChanges": {
                            "roles": [
                                2
                            ]
                        },
                        "showPublish": {
                            "roles": [
                                2
                            ]
                        },
                        "showSubmit": {
                            "roles": [
                                1
                            ]
                        },
                        "showCreatorView": {
                            "roles": [
                                1
                            ]
                        },
                        "showReviewerView": {
                            "roles": [
                                2
                            ]
                        },
                        "showCreateQuestion": {
                            "roles": [
                                1
                            ]
                        },
                        "showDeleteQuestion": {
                            "roles": [
                                1
                            ]
                        }
                    },
                    "sharedContext": [
                        "channel",
                        "framework",
                        "board",
                        "medium",
                        "gradeLevel",
                        "subject"
                    ]
                }
            }
        };

        const request = supertest(prop.domainUrl);
        //this.reqspec = request.post(path.programCreate)
       // .set('Authorization', prop.authKey)
        //.set('Content-Type', 'application/json')
       // .send(programs.jsonData);
    }
module.exports= new programCreate();