$(document).ready(function(){



    //UI Elements 
    
    $("#datatable").dataTable({
        "bJQueryUI": true,
        "bSort": false,
        "sPaginationType": "full_numbers",
        "iDisplayLength": 5,
        "aLengthMenu": [[5, 10, 20, 50, -1], [5, 10, 20, 50, "All"]],
        "sDom": '<"H"fp>t<"F"irl>'
    });
    
    
    
    $(".tblMap").dataTable({
        "bJQueryUI": true,
        "bSort": false,
        "sDom": '<"H"f>t<"F"ir>'
    });
    
    //Modal Load
    $("#btnUpload").click(function(){
        $("#loadModal").show();
    });
    
    //Buttons 
    
    
    $('.errorText').live('click', function(){
        $(".dr").children().removeClass("invalidDR");
        var span = "#dr" + $(this).children("span").text()
        
        
        
        $('.tblPreview').scrollTo($(span), 400);
        
        $(span).children().addClass("invalidDR");
        
    });
    
    
    
    
    
    $("#vMax").buttonset();
    $("#fOp").buttonset();
    $(".ccb").button();
    
    $(".ccb").click(function(){
    
        if ($(this).prop("checked")) {
        
            $(this).button("option", "label", "Enabled");
            
            
        }
        else {
        
            $(this).button("option", "label", "Disabled");
            
        }
        
    });
    
    $('[id^="btn"]').button();
    
    $('#btnBack').button({
        icons: {
            primary: 'ui-icon-circle-triangle-w'
        }
    });
    
    
    $('#btnContinue').button({
        icons: {
            secondary: 'ui-icon-circle-check'
        }
    });
    
    $('#btnUpload').button({
        icons: {
            secondary: 'ui-icon-circle-check'
        }
    });
    
    $('#btnVal').button({
        icons: {
            primary: 'ui-icon-check'
        }
    });
    
    
    $('#btnValData').button({
        icons: {
            primary: 'ui-icon-check'
        }
    });
    
    $('#btnEa').button({
        icons: {
            primary: 'ui-icon-circle-check'
        }
    });
    
    $('#btnDa').button({
        icons: {
            primary: 'ui-icon-circle-close'
        }
    });
    
    
    $(".btnGenerate").button({
        icons: {
            primary: 'ui-icon-refresh'
        }
    });
    
    
    $(".btnDownload").button({
        icons: {
            primary: 'ui-icon-circle-arrow-s'
        }
    });
    
    
    $(".btnDownloadArc").button({
        icons: {
            primary: 'ui-icon-circle-arrow-s'
        }
    });
    
    
    $('#btnPost').button({
        icons: {
            primary: 'ui-icon-mail-closed'
        }
    });
    
    //Events
    
    $('#btnBack').click(function(){
        history.go(-1);
    });
    
    
    $("#optionForm").validateMyForm({
        form: '#optionForm',
        daysFirst: true
    });
    
    
    
    $('#btnUpload').click(function(){
        $('#uploadForm').submit();
    });
    
    $('#btnContinue').click(function(){
        $('#optionForm').submit();
    });
    
    $(".btnDownload").live('click',function(){
    
    
        document.location = $(this).children("span").children("a").attr("href");
        
    });
    
    
    $(".btnDownloadArc").click(function(){
    
    
        document.location = $(this).children("span").children("a").attr("href");
        
    });
    
    $(".tblPreviewTog").click(function(){
    
        $(".tblPreview").slideToggle('slow');
        
    });
    
    $(".tblMapTog").click(function(){
    
        $(".tblMap").slideToggle('slow');
        
    });
    
    
    
    $("#mVer7").click(function(){
    
        $("#m6").hide();
        $("#m7").show();
        
        
        $("#m6IntObj").removeClass("required");
        $("#m6InInt").removeClass("required");
        $("#m6ExtSys").removeClass("required");
        
        $("#mObjStruct").addClass("required");
        $("#mPubChan").addClass("required");
        
    });
    
    $("#mVer6").click(function(){
    
        $("#m7").hide();
        $("#m6").show();
        
        
        $("#mObjStruct").removeClass("required");
        $("#mPubChan").removeClass("required");
        
        
        $("#m6IntObj").addClass("required");
        $("#m6InInt").addClass("required");
        $("#m6ExtSys").addClass("required");
        
        
    });
    
    $("#btnEa").click(function(){
    
        $('.fne').each(function(){
        
            $(this).prop("checked", true);
            
            
        });
        
        
    });
    
    $("#btnDa").click(function(){
    
        $('.fne').each(function(){
        
            $(this).prop("checked", false);
            
            
        });
        
        
        
    });
    
    $("#btnIv").click(function(){
    
        $('.fne').each(function(){
        
            if ($(this).prop("checked")) {
            
                $(this).prop("checked", false);
                
                
            }
            else {
            
                $(this).prop("checked", true);
                
            }
        });
        
        
        
    });
    
    
    
    
    $(".btnGenerate").click(function(){
    
        var id = $(this).attr("id");
        id = id.replace('gen', '');
        var start = $('#start' + id).val();
        var end = $('#end' + id).val();
        
        
        $.ajax({
            type: "POST",
            url: "./generateXML.php",
            data: {
                'start': start,
                'end': end
            },
            success: function(data){
            
                $('#dlLinks').append(data);
               
			   
			    $(".btnDownload").button({
                    icons: {
                        primary: 'ui-icon-circle-arrow-s'
                    }
                });
                
            }
            
            
        });
        
        
        
    });
    
    
    
    
    
    
});



function info(msg, error){

    $('#infoMsg').text(msg);
    
    if (error == false) {
    
        $('#infoImg').removeClass('notvalid');
        $('#infoImg').addClass('valid');
        
    }
    else {
        $('#infoImg').removeClass('valid');
        $('#infoImg').addClass('notvalid');
        
    }
    
    $('#infoBar').fadeIn(700).delay(3000).slideUp("slow");
    
    
}
