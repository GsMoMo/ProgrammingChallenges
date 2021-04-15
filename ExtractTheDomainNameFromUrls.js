// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = url => url.replace(/(https?:\/\/)?(www.)?/ig, "").replace(/\/[\w+]*|\.[\w+]*/ig, "")
console.log(domainName("http://google.co.jp"))