function skillsMember(member) {
    if (member && Array.isArray(member.skills)) {
        return member.skills;
    } else {
        return [];
    }
}

// Uso
let member = {
    name: "Juan",
    skills: ["JavaScript", "Node.js", "React"]
};

console.log(skillsMember(member)); // ["JavaScript", "Node.js", "React"]
