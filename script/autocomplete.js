$(document).ready(function(){
	
	
	var availableTags = [
"A_ASSET",
"A_JOBTASK",
"A_LONGDESCRIPTION",
"A_PM",
"ACCOUNTDEFAULTS",
"ACTCI",
"ACTCIRELATION",
"ACTCISPEC",
"ACTION",
"ACTIONGROUP",
"ACTIONSCFG",
"ADDRESS",
"ADDUSER",
"ADMINMONITOR",
"AGREEMENTINPUT",
"ALNDOMAIN",
"ALTITEM",
"AMOUNTFORMAT",
"APPDOCTYPE",
"APPFIELDDEFAULTS",
"APPLICATIONAUTH",
"APPLYNONWORKTIME",
"APPSUPPORT",
"ARCHIVE",
"AREASAFFECTED",
"ASCHANGESTATUS",
"ASSET",
"ASSETANCESTOR",
"ASSETATTRIBUTE",
"ASSETFEASPECHIST",
"ASSETFEATURE",
"ASSETFEATUREHIST",
"ASSETFEATURESPEC",
"ASSETHIERARCHY",
"ASSETHISTORY",
"ASSETINPUT",
"ASSETISSUEITEMS",
"ASSETLOCCOMM",
"ASSETLOCRELATION",
"ASSETLOCRELHIST",
"ASSETLOCUSERCUST",
"ASSETMETER",
"ASSETMODIFYDFLT",
"ASSETMOVEDFLT",
"ASSETSPEC",
"ASSETSPECHIST",
"ASSETSTATUS",
"ASSETSTATUSDUMMY",
"ASSETTRANS",
"ASSETUSERCUSDFLT",
"ASSETUSERCUST",
"ASSETZEROCOSTS",
"ASSIGNLABOR",
"ASSIGNMENT",
"ASSOCCONTINPUT",
"ASSOCIATEDFOLDER",
"ASYNCJOBCLEANUPCRONPARAM",
"ASYNCJOBCRONPARAM",
"ATTENDANCE",
"AUTOATTRUPDATE",
"AUTOKEY",
"AUTOSCRIPT",
"AUTOSCRIPTCHGSTATE",
"AUTOSCRIPTSTATE",
"BBOARDAUDIENCE",
"BBOARDMSGSTATUS",
"BBSTATUSHISTORY",
"BOOKMARK",
"BULLETINBOARD",
"CALCWORKHOURS",
"CALENDAR",
"CALENDARVIEW",
"CDMCITYPES",
"CHANGECAPSTATUS",
"CHANGEITEMNUM",
"CHANGEPASSWORDS",
"CHARPOINTACTION",
"CHARTOFACCOUNTS",
"CI",
"CICHANGESTATUS",
"CIRELATION",
"CIRELATIONHIS",
"CISPEC",
"CISPECHIS",
"CISTATUS",
"CITEMPLATE",
"CITYPECNGSTATUS",
"CITYPESTATUS",
"CLASSANCESTOR",
"CLASSIFICATION",
"CLASSSPEC",
"CLASSSPECUSEWITH",
"CLASSSTRUCTURE",
"CLASSUSEWITH",
"COLLECTDETAILS",
"COLLECTION",
"COLLECTIONAUTH",
"COMMLOG",
"COMMLOGDOCS",
"COMMODITIES",
"COMMTEMPLATE",
"COMMTEMPLATEDOCS",
"COMMTMPLTCHGSTAT",
"COMMTMPLTSENDTO",
"COMPANIES",
"COMPANYACCDEF",
"COMPCOMMODITY",
"COMPCONTACT",
"COMPCONTACTMSTR",
"COMPLETEWF",
"COMPMASTER",
"COMPUTERSYSTEM",
"CONDITION",
"CONFIRMLABTRANS",
"CONTASSETMETER",
"CONTCOMMODITY",
"CONTLEASEENDASST",
"CONTLINEASSET",
"CONTLINEMETER",
"CONTRACT",
"CONTRACTASSET",
"CONTRACTAUTH",
"CONTRACTDEFAULT",
"CONTRACTFROMPO",
"CONTRACTFROMPR",
"CONTRACTFROMRFQ",
"CONTRACTLEASE",
"CONTRACTLEASEEND",
"CONTRACTLINE",
"CONTRACTMASTER",
"CONTRACTPROPERTY",
"CONTRACTPURCH",
"CONTRACTSFW",
"CONTRACTSTATUS",
"CONTRACTSWLIC",
"CONTRACTTERM",
"CONTRACTTYPE",
"CONTRACTTYPETERM",
"CONTSFWLIC",
"CONVERSION",
"COSTINPUT",
"CRAFT",
"CRAFTRATE",
"CRAFTSKILL",
"CREATEINVOICE",
"CREATERELINPUT",
"CREATESERVREC",
"CRONTASKDEF",
"CRONTASKHISTORY",
"CRONTASKINSTANCE",
"CRONTASKPARAM",
"CROSSOVERDOMAIN",
"CTRL_ACTION",
"CTRL_APPBAR",
"CTRL_ATTACHDOC",
"CTRL_ATTACHMENTS",
"CTRL_BLANKLINE",
"CTRL_BREADCRUMBS",
"CTRL_BUTTONGROUP",
"CTRL_CHECKBOX",
"CTRL_CLIENTAREA",
"CTRL_COMBOBOX",
"CTRL_CTCONTAINER",
"CTRL_DATASRC",
"CTRL_DEFAULT",
"CTRL_DIALOG",
"CTRL_DISPLAYRULE",
"CTRL_DOCLINKBTN",
"CTRL_EXACT",
"CTRL_HELPGRID",
"CTRL_HYPERLINK",
"CTRL_IMAGE",
"CTRL_INCLUDE",
"CTRL_KPIGRAPH",
"CTRL_LISTBOX",
"CTRL_MENUBAR",
"CTRL_MLNETEXTBOX",
"CTRL_MPRTTEXTBOX",
"CTRL_PAGE",
"CTRL_PARAMVALUE",
"CTRL_PARAMVALUES",
"CTRL_PRESENTATIO",
"CTRL_PUSHBUTTON",
"CTRL_RADIOBTNGRP",
"CTRL_RADIOBUTTON",
"CTRL_RANGE",
"CTRL_RECORDIMAGE",
"CTRL_SECTION",
"CTRL_SECTIONCOL",
"CTRL_SECTIONHDR",
"CTRL_SECTIONROW",
"CTRL_STATICTEXT",
"CTRL_SYSTEMPROP",
"CTRL_TAB",
"CTRL_TABGROUP",
"CTRL_TABLE",
"CTRL_TABLEBODY",
"CTRL_TABLECOLUMN",
"CTRL_TEXTBOX",
"CTRL_TREE",
"CTRL_TREEATTRIB",
"CTRL_TREENODE",
"CTRL_UPLOADFILE",
"CTRL_WALLCALENDR",
"CTRLCONDITION",
"CTRLCONDPROP",
"CTRLGROUP",
"CURRENCY",
"DATABASEACCESS",
"DATABASEACCESSID",
"DATESELECTOR",
"DATESELECTORDOM",
"DATESELECTORDOW",
"DATESELECTRFIRST",
"DATESELECTRMONTH",
"DATESELMINUTE",
"DATESELPREVIEW",
"DEFAULTQUERY",
"DEFINEFILTER",
"DELETEWORKPERIOD",
"DEPLOYEDASSET",
"DISPATCHASSIGN",
"DMCFGGROUP",
"DMCFGOBJECT",
"DMDEPENDENCY",
"DMDEPLOYABLEPKG",
"DMMESSAGE",
"DMPACKAGE",
"DMPACKAGEDEF",
"DMPKGCFGGRPDEF",
"DMPKGCFGOBJDEF",
"DMPKGCMPSRC",
"DMPKGCMPSRCDEF",
"DMPKGDEFCHANGESTAT",
"DMPKGDEFSTATUS",
"DMPKGDIST",
"DMPKGDISTTRACK",
"DMPKGDSTTRGT",
"DMPKGEVENTTRK",
"DMPKGSTAGING",
"DMPKGSTATUS",
"DMPKGTRACKHIST",
"DMRESTRICTION",
"DMSAPISETTING",
"DMSTRUC",
"DOCINFO",
"DOCLINKS",
"DOCTYPES",
"DOWNTIMEREPORT",
"DPACCOMMDEVICE",
"DPACCPU",
"DPACDISK",
"DPACDISPLAY",
"DPACIMAGEDEVICE",
"DPACMEDIAADAPTER",
"DPACNETADAPTER",
"DPACNETDEVCARD",
"DPACOMMDEVICE",
"DPACOMPUTER",
"DPACOS",
"DPACPU",
"DPACSOFTWARE",
"DPACSWSUITE",
"DPADISK",
"DPADISPLAY",
"DPAFILE",
"DPAIMAGEDEVICE",
"DPAIPX",
"DPALOGICALDRIVE",
"DPAMADAPTER",
"DPAMADAPTMOVE",
"DPAMADPTVARIANT",
"DPAMEDIAADAPTER",
"DPAMMANUFACTURER",
"DPAMMANUMOVE",
"DPAMMANUVARIANT",
"DPAMOS",
"DPAMOSMOVE",
"DPAMOSVARIANT",
"DPAMPROCESSOR",
"DPAMPROCMOVE",
"DPAMPROCVARIANT",
"DPAMSOFTWARE",
"DPAMSWMOVE",
"DPAMSWSUITE",
"DPAMSWSUITECOMP",
"DPAMSWUSAGE",
"DPAMSWUSAGERANGE",
"DPAMSWVARIANT",
"DPANETADAPTER",
"DPANETDEVCARD",
"DPANETDEVICE",
"DPANETPRINTER",
"DPAOS",
"DPASOFTWARE",
"DPASWSUITE",
"DPATCPIP",
"DPAUSERINFO",
"DRILLDOWN",
"DRPOLDTAB",
"DUMMY_TABLE",
"ECOMMADAPT",
"EDITWFAPPTOOLBAR",
"EMAIL",
"ESCALATION",
"ESCCOMMLOG",
"ESCNOTIFICATION",
"ESCREFPOINT",
"ESCREPEATTRACK",
"ESCSTATUS",
"ESIGLOGIN",
"EVENTRESPONSE",
"EXCHANGE",
"EXCLUDEDACTIONS",
"EXCLUDEPASSWORD",
"EXPBUILDATTR",
"EXPBUILDER",
"EXPBUILDTREE",
"FACONFIG",
"FAILURECODE",
"FAILURELIST",
"FAILUREREMARK",
"FAILUREREPORT",
"FAVITEM",
"FEATURES",
"FEATURESPEC",
"FEATURESTATUS",
"FINANCIALPERIODS",
"FINCNTRL",
"FORGOTPASSWORD",
"FSNCLASS",
"FSNCLASSQUAL",
"FSNCLASSRELATION",
"FSNLASTSCAN",
"FSNMETHOD",
"FSNMETHODPARAM",
"FSNMTHDPARAMQUAL",
"FSNMTHDQUAL",
"FSNOBJECT",
"FSNOBJPROPERTY",
"FSNOBJRELATION",
"FSNPROPERTY",
"FSNPROPERTYQUAL",
"FSNPROVIDER",
"FSNQUALIFIER",
"FSNREFPROPERTY",
"FSNSCHEMA",
"FSNSQLCOLUMN",
"FSNSQLTABLE",
"FSNTABLEQUAL",
"FTRCHANGESTATUS",
"GENERATEWO",
"GLAUTH",
"GLCOMPONENTS",
"GLCONFIGURE",
"GLNAVTEMPORG",
"GLUPDATEDATABASE",
"GROUPUSER",
"GRPREASSIGNAUTH",
"HAZARD",
"HAZARDPREC",
"IERRCHANGESTATUS",
"IERRSTATUSDUMMY",
"IMGLIB",
"IMPROFILE",
"INBCOMMSECURITY",
"INBOUNDCOMM",
"INBOUNDCOMMCFG",
"INBXCONFIG",
"INCIDENT",
"INITIATEWORKFLOW",
"INPUTWF",
"INTGENERATOR",
"INTOBJRELATION",
"INVADJUSTMENT",
"INVBALANCES",
"INVCHANGESTATUS",
"INVCOST",
"INVENTORY",
"INVLOT",
"INVOICE",
"INVOICECHGSTAT",
"INVOICECOST",
"INVOICELINE",
"INVOICEMATCH",
"INVOICESTATUS",
"INVOICETERM",
"INVOICETRANS",
"INVRESERVE",
"INVSTATUS",
"INVTRANS",
"INVVENDOR",
"ISSUECURRENTITEM",
"ISSUEITEMTOASSET",
"ITEM",
"ITEMCHANGESTATUS",
"ITEMCONDITION",
"ITEMORGCHGSTATUS",
"ITEMORGINFO",
"ITEMORGSTATUS",
"ITEMSPEC",
"ITEMSTATUS",
"ITEMSTRUCT",
"JOBITEM",
"JOBLABOR",
"JOBMATERIAL",
"JOBPLAN",
"JOBPLANCLASS",
"JOBPLANFILTER",
"JOBPLANSPEC",
"JOBSERVICE",
"JOBTASK",
"JOBTASKSPEC",
"JOBTOOL",
"JPASSETSPLINK",
"JPCHANGESTATUS",
"JPDUMMYSTATUS",
"JPFROMWOINPUT",
"JPTASKLOOKUP",
"JPTASKRELATION",
"JPTOTAL",
"KIT",
"KPIGCONFIG",
"KPIHISTORY",
"KPILCONFIG",
"KPIMAIN",
"KPIOEE",
"KPITRENDCFG",
"L_ALNDOMAIN",
"L_ASSETATTRIBUTE",
"L_COMMTEMPLATE",
"L_COMPANIES",
"L_CONDITION",
"L_CTRLCONDPROP",
"L_ITEM",
"L_MAXAPPS",
"L_MAXATTRCFG",
"L_MAXATTRIBUTE",
"L_MAXDOMAIN",
"L_MAXINTOBJDETAIL",
"L_MAXLABELS",
"L_MAXMENU",
"L_MAXMESSAGES",
"L_MAXMODULES",
"L_MAXOBJECT",
"L_MAXOBJECTCFG",
"L_MAXSERVICE",
"L_NUMERICDOMAIN",
"L_PALETTEITEM",
"L_REPORT",
"L_REPORTLABEL",
"L_REPORTLOOKUP",
"L_SIGOPTION",
"L_SOLUTION",
"L_SYNONYMDOMAIN",
"LABCHANGESTATUS",
"LABINVLOCCHANGE",
"LABOR",
"LABORAUTH",
"LABORCERTHIST",
"LABORCRAFTRATE",
"LABORQUAL",
"LABORQUALSTATUS",
"LABORSTATUS",
"LABORVIEW",
"LABORVIEWCHGSTAT",
"LABQUALCHSTATUS",
"LABTRANS",
"LABTRANSENTERBY",
"LANGUAGE",
"LAYOUT",
"LDAPSYNCCRONPARM",
"LDAPSYNCPARAMS",
"LEASEVIEW",
"LEASEVIEWCHGSTAT",
"LEASEVIEWLINE",
"LIMITTOLERANCE",
"LINEARREFMETHOD",
"LINKCLASSSPEC",
"LMO",
"LMOATT",
"LMOIMRLN",
"LMOIMTABLE",
"LNKCLAUSEATRNAME",
"LNRRECALIB",
"LNRRECALIBNONAF",
"LOCANCESTOR",
"LOCATIONMETER",
"LOCATIONS",
"LOCATIONSPEC",
"LOCATIONUSERCUST",
"LOCAUTH",
"LOCCHANGESTATUS",
"LOCHIERARCHY",
"LOCKOUT",
"LOCLEADTIME",
"LOCMETERREADING",
"LOCOPER",
"LOCSTATUS",
"LOCSYSTEM",
"LOGINTRACKING",
"LONGDESCRIPTION",
"MASTERPM",
"MASTERPMMETER",
"MASTERPMSEASONS",
"MASTERPMSEQ",
"MASTERPMWORKTYPE",
"MASTERVIEW",
"MASTVIEWCHGSTAT",
"MATRECTRANS",
"MATUSETRANS",
"MAXAPPS",
"MAXASYNCJOB",
"MAXASYNCJOBMSG",
"MAXASYNCJOBPARAM",
"MAXATTRIBUTE",
"MAXATTRIBUTECFG",
"MAXCONDDETAIL",
"MAXCONTROLVALUE",
"MAXDATAPREFIX",
"MAXDOMAIN",
"MAXDOMAINLINK",
"MAXDOMVALCOND",
"MAXDYNAMICDOMLINK",
"MAXENDPOINT",
"MAXENDPOINTDTL",
"MAXENDPOINTTEST",
"MAXEXTBOOLVAL",
"MAXEXTCTLVAL",
"MAXEXTIFACEIN",
"MAXEXTIFACELIST",
"MAXEXTIFACEOUT",
"MAXEXTLISTVAL",
"MAXEXTOVER",
"MAXEXTSYSCONTROL",
"MAXEXTSYSTEM",
"MAXEXTXREFVAL",
"MAXGROUP",
"MAXHANDLER",
"MAXIFACECOND",
"MAXIFACECONTROL",
"MAXIFACEIN",
"MAXIFACEINCNTL",
"MAXIFACEINDETAIL",
"MAXIFACEINVOKE",
"MAXIFACELOAD",
"MAXIFACEOUT",
"MAXIFACEOUTCNTL",
"MAXIFACEPROC",
"MAXIFACETBDATA",
"MAXIFACETYPEPROP",
"MAXIM",
"MAXIMPROP",
"MAXINTERACTION",
"MAXINTERROR",
"MAXINTERROREXTRACT",
"MAXINTERRORMSG",
"MAXINTEXTRACTFILE",
"MAXINTFILELOOKUP",
"MAXINTLISTENER",
"MAXINTMAPPING",
"MAXINTMAPPINGDETAIL",
"MAXINTMSGTRK",
"MAXINTMSGTRKDTL",
"MAXINTOBJALIAS",
"MAXINTOBJCOLS",
"MAXINTOBJDETAIL",
"MAXINTOBJECT",
"MAXINTPOLICY",
"MAXINTPOLICYPARAM",
"MAXINTVIEWQUEUE",
"MAXLABELS",
"MAXLAUNCHENTRY",
"MAXLECONTEXT",
"MAXLISTOVERVAL",
"MAXLOGAPPENDER",
"MAXLOGGER",
"MAXLOOKUPMAP",
"MAXMENU",
"MAXMESSAGES",
"MAXMODULES",
"MAXOBJECT",
"MAXOBJECTCFG",
"MAXPRESENTATION",
"MAXPROCCOLS",
"MAXPROP",
"MAXPROPINSTANCE",
"MAXPROPVALUE",
"MAXQUEUE",
"MAXRELATIONSHIP",
"MAXREPLACEPROC",
"MAXROLE",
"MAXROWSTAMP",
"MAXSEQUENCE",
"MAXSERVICE",
"MAXSERVSECURITY",
"MAXSESSION",
"MAXSYSINDEXES",
"MAXSYSKEYS",
"MAXTABLE",
"MAXTABLECFG",
"MAXTABLEDOMAIN",
"MAXTOKEN",
"MAXTRANSFORMPROC",
"MAXUSER",
"MAXUSERSTATUS",
"MAXUSRDBAUTHINFO",
"MAXVARINPUT",
"MAXVARS",
"MAXVARTYPE",
"MAXVIEW",
"MAXVIEWCFG",
"MAXVIEWCOLUMN",
"MAXVIEWCOLUMNCFG",
"MAXWSOPERATION",
"MAXWSREGISTRY",
"MAXWSSECPARAM",
"MAXXREFOVERVAL",
"MEA_DUMMY_TABLE",
"MEASUREMENT",
"MEASUREPOINT",
"MEASUREUNIT",
"METER",
"METERDATA",
"METERGROUP",
"METERINGROUP",
"METERREADING",
"MODAVAIL",
"MODDOWNTIMEHIST",
"MPWOGENCRONPARAM",
"MR",
"MRCHANGESTATUS",
"MRCOST",
"MRLINE",
"MRSTATUS",
"MRTEMPLATE",
"MULTIASSETLOCCI",
"MULTIASSETLOCCIPR",
"MULTISELECTNP",
"MXCOLLAB",
"MXCOLLABREF",
"MXGLTXN",
"MXRECEIPT",
"MYPROFILECHNGEPW",
"NAMEDUSERS",
"NETDEVICE",
"NETPRINTER",
"NONWORKTIME",
"NOTIFICATIONWF",
"NPCOLLECTION",
"NUMERICDOMAIN",
"NUMRANGEDOMAIN",
"OBJECTNAME",
"OMP",
"OMPCIRLN",
"OMPIMLMORLN",
"OMPIMRLN",
"ORGANIZATION",
"PALETTEITEM",
"PASSWORDHISTORY",
"PDSPEC",
"PERSCHANGESTATUS",
"PERSON",
"PERSONAVAIL",
"PERSONCAL",
"PERSONGROUP",
"PERSONGROUPTEAM",
"PERSONGROUPVIEW",
"PERSONSTATUS",
"PHONE",
"PM",
"PMANCESTOR",
"PMCHANGESTATUS",
"PMCOMCONFIGURATION",
"PMCOMSR",
"PMMETER",
"PMSEASONS",
"PMSEQUENCE",
"PMSTATUSDUMMY",
"PMVIAROUTE",
"PMWORKGENERATION",
"PO",
"POCHANGESTATUS",
"POCOST",
"POECOMSTATUS",
"POFROMPRINPUT",
"POFROMRFQINPUT",
"POINTWO",
"POLINE",
"PORTLET",
"PORTLETDISPLAY",
"POSTATUS",
"POTERM",
"PPCRAFTRATE",
"PPLABORRATE",
"PR",
"PRCHANGESTATUS",
"PRCOST",
"PRECAUTION",
"PREMIUMPAY",
"PRICALC",
"PRLINE",
"PROBLEM",
"PROCESSMONITOR",
"PRODUCTINFO",
"PRODUCTUPDATE",
"PROMOTEACTCI",
"PROPERTYASSOC",
"PROPERTYDEFAULT",
"PROPERTYINPUT",
"PROPERTYLOOKUPLIST",
"PRSTATUS",
"PRTERM",
"PURCHVIEW",
"PURCHVIEWCHGSTAT",
"QUALCHANGESTATUS",
"QUALCRAFTSKILL",
"QUALIFICATION",
"QUALSTATUS",
"QUERY",
"QUEUENAME",
"QUICKPRINT",
"QUOTATIONLINE",
"RCNTSKFLTVAL",
"REASSIGNWF",
"RECEIPTINPUT",
"RECEIPTINPUTFIND",
"RECONASSETLINK",
"RECONASSETRESULT",
"RECONATTRCLAUSE",
"RECONCILINK",
"RECONCIRESULT",
"RECONCOMPFILTER",
"RECONCOMPFLTRAST",
"RECONCOMPFLTRDPA",
"RECONCOMPRULE",
"RECONLINK",
"RECONLINKCLAUSE",
"RECONLINKRULE",
"RECONMULTILINK",
"RECONRCDCLAUSE",
"RECONRESULT",
"RECONRULE",
"RECONRULECLAUSE",
"RECONTASK",
"RECONTASKCOMP",
"RECONTASKFILTER",
"RECONTASKFLTRVAL",
"RECONTASKLINK",
"RELATEDRECORD",
"RELATEDSLA",
"RELATION",
"RELATIONRULES",
"REORDERCRONPARAM",
"REORDERITEMS",
"REORDERMUTEX",
"REORDERPAD",
"REPIMPLIB",
"REPIMPREP",
"REPORT",
"REPORTAPPAUTH",
"REPORTAUTH",
"REPORTCRONPARAM",
"REPORTDEPEND",
"REPORTDESIGN",
"REPORTDIALOGDET",
"REPORTDS",
"REPORTDSPARAM",
"REPORTESS",
"REPORTFOLDER",
"REPORTJOB",
"REPORTLABEL",
"REPORTLIST",
"REPORTLISTCFG",
"REPORTLOOKUP",
"REPORTLOOKUPLIST",
"REPORTOSAUTH",
"REPORTPARAM",
"REPORTPARAMETER",
"REPORTPREVRUN",
"REPORTPROCRESERVE",
"REPORTPROCSCHED",
"REPORTPROCTIMEZONE",
"REPORTQUERYDOI",
"REPORTQUERYDOV",
"REPORTRUNLOCK",
"REPORTRUNPARAM",
"REPORTRUNQUEUE",
"REPORTSCHED",
"REPORTSCHEDULE",
"REPORTUSAGELOG",
"RESTDATA",
"RESULTSETCOLS",
"REVISIONINPUT",
"RFQ",
"RFQCHANGESTATUS",
"RFQLINE",
"RFQSTATUS",
"RFQTERM",
"RFQVENDOR",
"RFQVENDORTERM",
"ROUTE_STOP",
"ROUTES",
"RSCONFIG",
"SAFETYLEXICON",
"SAFETYPLAN",
"SCCONFIG",
"SCHEDULE",
"SCHEDULELINE",
"SCHLEASEVIEW",
"SCHPURCHVIEW",
"SCHWARRANTYVIEW",
"SCTEMPLATE",
"SEARCHATTRIBUTE",
"SEARCHDR",
"SEARCHHIRCHYREL",
"SEARCHSOLUTION",
"SECURITYRESTRICT",
"SERVICEITEMS",
"SERVICEOBJECT",
"SERVRECTRANS",
"SETS",
"SFWLICENSE",
"SFWLINE",
"SFWVIEW",
"SFWVIEWCHGSTAT",
"SFWVIEWLINE",
"SHIFT",
"SHIFTPATTERNDAY",
"SHIFTRANGE",
"SHIPMENT",
"SHIPMENTLINE",
"SHOWWFACTION",
"SHOWWFCONDITION",
"SHOWWFINPUT",
"SHOWWFINTERACT",
"SHOWWFNODE",
"SHOWWFSUBPROCESS",
"SHOWWFTASK",
"SHOWWFWAIT",
"SIGOPTFLAG",
"SIGOPTFLAGDLGPRX",
"SIGOPTION",
"SITE",
"SITEAUTH",
"SITEECOM",
"SLA",
"SLAASSETLOC",
"SLACHANGESTATUS",
"SLACOMMITMENTS",
"SLACONTRACT",
"SLADUMMYSTATUS",
"SLAKPI",
"SLARECORDS",
"SMS",
"SOLCHANGESTATUS",
"SOLUTION",
"SOLUTIONSPEC",
"SOLUTIONSTATUS",
"SPAREPART",
"SPELLCHECK",
"SPELLCHECKSUGG",
"SPLEXICONLINK",
"SPRELATEDASSET",
"SPWORKASSET",
"SR",
"SRVCOMMODRELREC",
"STOPWF",
"STRUCTRELATION",
"SWUSGQUERY",
"SYNONYMDOMAIN",
"TABLECOLUMN",
"TAGLOCK",
"TAGOUT",
"TASKSCHEDULER",
"TAX",
"TAXTYPE",
"TDTVERSION",
"TEMPCHANGESTATUS",
"TEMPLATESTATUS",
"TERM",
"TICKET",
"TICKETGRANDTOTAL",
"TICKETSPEC",
"TICKETTOTAL",
"TKCHANGESTATUS",
"TKGRANDTOTAL",
"TKOWNERHISTORY",
"TKSTATUS",
"TKTEMPLATE",
"TKTEMPLATESPEC",
"TKTEMPLTACTIVITY",
"TKTEMPLTACTYSPEC",
"TKTOTAL",
"TOOLINV",
"TOOLITEM",
"TOOLQUAL",
"TOOLTRANS",
"TRANSFERCURITEM",
"USERPREF",
"USERPROFILECATS",
"USERPROFILEHIER",
"USERPURGL",
"USERREPORT",
"USERREPORTCOL",
"USERREPORTPARAM",
"USERSECCONTROL",
"USERSECUR",
"USERSECURGROUP",
"USERSTATUSCHANGE",
"VENDORSTATUS",
"VIEWCONTINPUT",
"VIEWLIBFIL",
"VIEWREPDEP",
"VIEWSECURITYDET",
"VIEWSECURITYGR",
"VIEWWOPMS",
"VMMSYNCCRONPARM",
"WARRANTYASSET",
"WARRANTYLINE",
"WARRANTYVIEW",
"WARRANTYVIEWLINE",
"WARRVIEWCHGSTAT",
"WFACTION",
"WFAPPTOOLBAR",
"WFASSIGNMENT",
"WFCALLSTACK",
"WFCONDITION",
"WFEXPBUILDER",
"WFHELP",
"WFINPUT",
"WFINSTANCE",
"WFINTERACTION",
"WFNODE",
"WFNOTIFICATION",
"WFPROCESS",
"WFREVISION",
"WFSTART",
"WFSTOP",
"WFSUBPROCESS",
"WFTASK",
"WFTOOLBAR",
"WFTRANSACTION",
"WFWAITLIST",
"WHEREUSED",
"WMASSIGNMENT",
"WMMATCH",
"WOACTIVITY",
"WOANCESTOR",
"WOASSETSTOMOVE",
"WOASSETUSERCUST",
"WOCHANGE",
"WOCHANGESTATUS",
"WOCONTRACT",
"WOGEN",
"WOGENFORECAST",
"WOGRANDTOTAL",
"WOHAZARD",
"WOHAZARDPREC",
"WOLINEARSEARCH",
"WOLOCKOUT",
"WOLOCUSERCUST",
"WOMETER",
"WOOWNERHISTORY",
"WOPOINFO",
"WOPRECAUTION",
"WORELEASE",
"WORELEXT",
"WORKFLOWMAP",
"WORKLOG",
"WORKORDER",
"WORKORDERSPEC",
"WORKPERIOD",
"WORKPRIORITY",
"WORKTYPE",
"WORKVIEW",
"WOSAFETYLINK",
"WOSAFETYPLAN",
"WOSTATUS",
"WOTAGLOCK",
"WOTAGOUT",
"WOTASKLOOKUP",
"WOTASKRELATION",
"WOTOTAL",
"WPEDITSETTING",
"WPITEM",
"WPLABOR",
"WPMATERIAL",
"WPSERVICE",
"WPTOOL",
"WSIOTREE",
"WSSECPARAMNP",
"YORNLOOKUPLIST",
"ZEROYTD"
];
		
		
		$( ".owntbl" ).autocomplete({
			source: availableTags
		});
		
	
	
	
	
});


