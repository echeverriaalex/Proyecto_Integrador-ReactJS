export const formatUserName = (name) => {
    if (!name) return
    name = name.trim().split(" ");
    return name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
};
