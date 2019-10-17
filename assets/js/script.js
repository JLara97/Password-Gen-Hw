

document.getElementById("generate").addEventListener("click", function()
{
    getPasswordOptions();
});


function getPasswordOptions()
{
    var length = parseInt(prompt("How many characters would like your password to contain?"));

    if (isNaN(length))
    {
        alert("Password length must be a number.");
        return;
    }

    if (length < 8)
    {
        alert("Password length must be greater than 8.");
        return;
    }

    if (length > 128)
    {
        alert("Password length must be less than 128.");
        return;
    }

    var specialChar = confirm("Would you like to use special characters?");
    var numericChar = confirm("Would you like to use numbers?");
    var upperChar = confirm("Would you like to use uppercase letters?");
    var lowerChar = confirm("Would you like to use lowercase letters?");
    
    if (!specialChar && !numericChar && !upperChar && !lowerChar)
    {
        alert("There is nothing we can produce with those answers.");
        return;
    }

    var passwordOpt = {specialChar, numericChar, upperChar, lowerChar};

    return;
}

function createPassword() 
{
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!$^&*-=+_?";
    var passwordArray = Array(length);

    if (passwordOpt.specialChar === true && passwordOpt.numericChar === true && passwordOpt.upperChar === true && passwordOpt.lowerChar === true)
    {
        for (i = 0; i < length; i++) 
        {
            var currentOption = options[Math.floor(Math.random() * options.length)];
            var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
            password += randomChar;
            passwordArray.push(randomChar);
        }
    
        return password;
    }
}
