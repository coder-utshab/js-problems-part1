function fullName (first, second){
    if(typeof first !== 'string'){
        return 'first name should be a string';
    }
    else if(typeof secoend !== 'string'){
        return 'Second Name should be a string';
    }
    const full = first + ' '+ second;
    return full;

}

const full = fullName ('utshab kumar')
console.log(full);