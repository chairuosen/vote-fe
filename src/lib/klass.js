function Option(){
    return {
        id:'',
        text:''
    };
}
function Question(){
    return {
        text:'',
        selectType:'single',// single multi
        withInput:false,
        isRequired:false,
        options:[new Option()]
    }
}
function Answer(question){
    return {
        value:question.selectType == 'single' ? "" : [],
        text:''
    }
}

module.exports = {
    Option,
    Question,
    Answer
};