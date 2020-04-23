const settings = require('../settings.json');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("❌**خطا:** انا اسفة لكنني لا امتلك صلاحية **Manage Roles**!");
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("❌**خطا:** انت لا تمتلك صلاحية **Manage Roles** Owo!");
    if (message.mentions.users.size === 0) return message.reply("❌ارجوك حدد من ترغب بمنحه دور.\nمثال: `addrole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("❌**Error:** That user does not seem valid.");
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find('name', name);
    if (!role) return message.reply(`❌**Error:** ${name} غير موجود بهذا السيرفر!`);
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.highestRole.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**خطا:** فشل اضافة الدور الذي حددته للعضو نضرا لضعف رتبتك او قلتها ")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**خطا:** فشل اضافة الدور الذي حددته لأن رتبتي اعلى من الدور الذي حددته او العكس صحيح.");
    member.addRole(role).catch(e => {
        return message.channel.send(`❌**Error:**\n${e}`);
    });
    message.channel.send(`<a:balancecheck:556017659419033653> **${message.author.username}**, لقد قمت باضافة **${name}** الدور من **${message.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buff"],
  permLevel: 0
};

exports.help = {
  name: '-addrole',
  description: 'منح ادوار للأعضاء. انها سهلة كما تعلم.',
  usage: 'addrole [mention] [role name (don\'t mention the role)]'
};