// import { sample } from "lodash-es";
// import { nameList } from "./utils";

const ruleText = "《传令官战斗规则》\n\n" +
"1. 角色属性\n" +
"每个角色的生命值等于玩家人数(NUM)。\n" +
"(注意：开启规则后生命值和生命力(hp)分别计算)\n" +
"每回合开始时，拥有的掷骰次数等于玩家人数 + 3。\n\n" +
"2. 游戏机制\n" +
"目标：击败所有敌人。\n" +
"骰子类型：六面骰（d6）。\n" +
"动作类型：\n" +
"  🛡 防御动作（1 或 2）：闪避或格挡敌方攻击（.cl 防御）。\n" +
"  ⚡ 特殊动作（3 或 4）：加强攻击或提前防御（.cl 特殊）。\n" +
"  ⚔️ 攻击动作（5 或 6）：攻击敌方单位（.cl 攻击）。\n\n" +
"3. 战斗流程\n" +
"角色创建：\n" +
"  使用标准COC7角色卡设定基础属性。\n" +
"  通过.st 人数:X设置人数(NUM)，系统计算生命值和掷骰次数。\n" +
"  使用.clg命令显示传令官角色状态。\n\n" +
"回合流程：\n" +
"  1. 回合开始：敌方先手，投掷骰子。\n" +
"  2. 玩家投掷：\n" +
"     使用.cl r单次投掷，或.cl all一次投掷所有骰子。\n" +
"  3. 动作判定：\n" +
"     攻击：若骰出 5 或 6，则获得一次攻击动作。\n" +
"     防御：若骰出 1 或 2，则获得一次防御动作。\n" +
"       成功防御则抵消一次攻击，否则生命值 -1，人数 -1。\n" +
"     特殊动作（.cl 特殊）：\n" +
"       加强下回合攻击伤害+1。\n" +
"       提前防御敌方下回合的加强攻击。\n" +
"  4. 回合结束（.cl 结束回合）：\n" +
"     消耗完所有攻击和特殊动作后，弃掉所有防御动作。\n" +
"     进入新回合，刷新掷骰次数。\n\n" +
"4. 命令列表\n" +
".st 人数:X 设置角色人数\n" +
".sn clg 使用传令官特色名片\n" +
".cl r 单次掷骰\n" +
".cl all 一次性投掷所有骰子\n" +
".cl 攻击 使用攻击动作\n" +
".cl 防御 使用防御动作\n" +
".cl 特殊 使用特殊动作\n" +
".cl 结束回合 结束当前回合\n\n" +
"本规则为COC7的扩展战斗机制，保留了原有技能和属性系统，可无缝衔接COC调查与角色扮演。";

const template = {
  name: '传令官',
  fullname: '传令官角色卡制作',
  authors: ['子锋'],
  version: '1.0.1',
  updatedTime: '20250320',
  templateVer: '1.0',
  nameTemplate: {
    clg: {
      template: '{$t玩家_RAW} HP{HP} NUM{人数} 掷骰次数{掷骰次数}',
      helpText: '自动设置传令官名片',
    },
  },
  setConfig: {
    diceSides: 100,
    enableTip: '已切换至100面骰，开启传令官规则扩展，使用特色战斗请用.cl',
    keys: ['clg'],
    relatedExt: ['传令官', 'coc7'],
  },
  attrConfig: {
    top: [
      '力量',
      '体质',
      '体型',
      '智力',
      '敏捷',
      '教育',
      '外貌',
      '意志',
      '幸运',
      'HP',
      '感知',
      'MP',
      '知识',
      '移动力',
      '人数',
      '掷骰次数',
    ],
    sortBy: 'name',
    ignores: ['力气', '耐力', '灵巧', '魅力'],
    showAs: {},
    setter: null,
  },
  defaults: {
    会计: 5,
    人类学: 1,
    估价: 5,
    考古学: 1,
    取悦: 15,
    魅惑: 15,
    攀爬: 20,
    计算机: 5,
    计算机使用: 5,
    电脑: 5,
    信用: 0,
    信誉: 0,
    信用评级: 0,
    克苏鲁: 0,
    克苏鲁神话: 0,
    cm: 0,
    乔装: 5,
    闪避: 20,
    汽车: 20,
    驾驶: 20,
    汽车驾驶: 20,
    电气维修: 10,
    电子学: 1,
    话术: 5,
    斗殴: 25,
    手枪: 20,
    急救: 30,
    历史: 5,
    恐吓: 15,
    跳跃: 20,
    母语: 55,
    法律: 5,
    图书馆: 20,
    图书馆使用: 20,
    聆听: 20,
    开锁: 1,
    撬锁: 1,
    锁匠: 1,
    机械维修: 10,
    医学: 1,
    博物学: 10,
    自然学: 10,
    领航: 10,
    导航: 10,
    神秘学: 5,
    重型操作: 1,
    重型机械: 1,
    操作重型机械: 1,
    重型: 1,
    说服: 10,
    精神分析: 1,
    心理学: 10,
    骑术: 5,
    妙手: 10,
    侦查: 25,
    潜行: 20,
    生存: 10,
    游泳: 20,
    投掷: 20,
    追踪: 10,
    动物驯养: 5,
    潜水: 1,
    爆破: 1,
    读唇: 1,
    催眠: 1,
    炮术: 1,
  },
  defaultsComputed: {
    感知: '意志',
    知识: '教育',
    生命值: '人数',
    掷骰次数: '人数+3',
  },
  alias: {
    力量: ['str', 'STR'],
    体质: ['con', 'CON', '體質'],
    体型: ['SIZ', 'SIZ', '體型'],
    智力: ['INT', 'INT'],
    敏捷: ['DEX', 'dex'],
    外貌: ['APP', 'APP'],
    意志: ['pow', 'POW'],
    教育: ['教养', 'EDU', 'edu'],
    幸运: ['LUC', 'luc', '幸運'],
    移动力: ['移動速度', '移动速度', 'MOV', 'mov', '移动'],
    HP: ['生命', '生命力', 'hp'],
    感知: ['SEN', 'sen'],
    知识: ['KNOW', 'know', '知識'],
    不定时: ['不定时值'],
    灵感: ['idea', 'IDEA'],
    DB: ['db', '伤害加成'],
    BLD: ['bld', '体格'],
    MP: ['mp', '魔力', '魔力值'],
    克苏鲁神话知识: ['克蘇魯神話知識', '克话', '克苏鲁神话'],
    卖萌: ['裝可愛', '装可爱'],
    闪避: ['迴避', '回避'],
    幻梦境知识: ['夢知識', '梦知识'],
    做梦: ['做夢'],
    地位: ['信誉', '信用'],
    哈气: ['恐嚇', '恐吓'],
    人类语言: ['人類語', '人类语'],
    人类知识: ['人類學', '人类学'],
    催眠: ['催眠術', '催眠术'],
    跳跃: ['跳躍'],
    聆听: ['聆聽'],
    导航: ['導航'],
    自然知识: ['自然界知識', '自然界知识'],
    嗅闻: ['嗅覺', '嗅觉'],
    危险察觉: ['察覺危險', '察觉危险'],
    潜行: ['潛行'],
    侦查: ['偵查'],
    街头知识: ['裏社會', '里世界'],
    投掷: ['投擲'],
    追踪: ['跟蹤', '跟踪'],
    人数: ['NUM', 'num'],
    掷骰次数: ['tou', 'TOU', 'dice'],
  },
  textMap: {
    'trpg-test': {
      设置测试_成功: [['设置完成', 1]],
    },
  },
  textMapHelpInfo: null,
};

try {
  seal.gameSystem.newTemplate(JSON.stringify(template));
} catch (e) {
  console.log(e);
}

function main() {
  let ext = seal.ext.find('cl_system');
  if (!ext) {
    ext = seal.ext.new('cl_system', '子锋', '1.0.0');
    seal.ext.register(ext);
  }

  const cmdCL = seal.ext.newCmdItemInfo();
  cmdCL.name = 'cl';
  cmdCL.help =
    '.cl <人数> | .cl r | .cl all | .cl 攻击 | .cl 防御 | .cl 特殊 | .cl 结束回合';

  let playerData = {};

  cmdCL.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);

    if (!val) {
      const ret = seal.ext.newCmdExecuteResult(true);
      ret.showHelp = true;
      return ret;
    }

    const userId = ctx.player.userId;

    if (val === 'r') {
      // 单次掷骰
      const [人数] = seal.vars.intGet(ctx, '人数');
      const 掷骰次数 = 人数 + 3;

      if (!playerData[userId]) {
        playerData[userId] = {
          人数: 人数,
          生命值: 人数,
          掷骰次数: 掷骰次数,
          防御动作: 0,
          特殊动作: 0,
          攻击动作: 0,
        };
      }

      if (playerData[userId].掷骰次数 <= 0) {
        seal.replyToSender(
          ctx,
          msg,
          '请先使用 .st 人数:X 设置人数，然后使用 .cl all 或 .cl r 开始掷骰。'
        );
        return seal.ext.newCmdExecuteResult(true);
      }

      const roll = Math.floor(Math.random() * 6) + 1;
      playerData[userId].掷骰次数--;

      // 同步更新角色卡属性
      seal.vars.intSet(ctx, '掷骰次数', playerData[userId].掷骰次数);

      let actionMessage = '';
      if (roll <= 2) {
        playerData[userId].防御动作++;
        actionMessage = '【防御】动作。';
      } else if (roll <= 4) {
        playerData[userId].特殊动作++;
        actionMessage = '⚡【特殊】动作，可用于蓄力、防备或撤离。';
      } else {
        playerData[userId].攻击动作++;
        actionMessage = '⚔【攻击】动作。';
      }

      seal.replyToSender(
        ctx,
        msg,
        `你投出了 ${roll}，获得一个 ${actionMessage}\n剩余掷骰次数：${playerData[userId].掷骰次数}。\n当前动作：🛡【防御】 ${playerData[userId].防御动作}，⚡【特殊】 ${playerData[userId].特殊动作}，⚔【攻击】 ${playerData[userId].攻击动作}。`
      );
      return seal.ext.newCmdExecuteResult(true);
    } else if (val === 'all') {
      // 一次性掷骰
      const [人数] = seal.vars.intGet(ctx, '人数');
      let 掷骰次数 = 人数 + 3;

      if (!playerData[userId]) {
        playerData[userId] = {
          人数: 人数,
          生命值: 人数,
          掷骰次数: 掷骰次数,
          防御动作: 0,
          特殊动作: 0,
          攻击动作: 0,
        };
      } else {
        掷骰次数 = playerData[userId].掷骰次数; // 使用已更新的掷骰次数
      }

      if (掷骰次数 <= 0) {
        seal.replyToSender(ctx, msg, '掷骰次数已经为0，请结束本回合。');
        return seal.ext.newCmdExecuteResult(true);
      }

      let 防御动作 = 0;
      let 特殊动作 = 0;
      let 攻击动作 = 0;

      for (let i = 0; i < 掷骰次数; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll <= 2) 防御动作++;
        else if (roll <= 4) 特殊动作++;
        else 攻击动作++;
      }

      playerData[userId].防御动作 = 防御动作;
      playerData[userId].特殊动作 = 特殊动作;
      playerData[userId].攻击动作 = 攻击动作;

      // 同步更新角色卡属性
      seal.vars.intSet(ctx, '掷骰次数', 0); // 一次性掷骰后，掷骰次数归零
      playerData[userId].掷骰次数 = 0;

      seal.replyToSender(
        ctx,
        msg,
        seal.format(
          ctx,
          `{$t玩家}的掷骰次数为${掷骰次数}次，共投出：\n${防御动作}个🛡【防御】\n${特殊动作}个⚡【特殊】\n${攻击动作}个⚔【攻击】\n你当前的生命值为：${playerData[userId].生命值}。`
        )
      );
      return seal.ext.newCmdExecuteResult(true);
    } else if (val === '攻击' || val === '防御' || val === '特殊') {
      if (!playerData[userId]) {
        seal.replyToSender(
          ctx,
          msg,
          '请先使用 .st num: <人数> 设置人数，然后使用 .cl r 掷骰子。'
        );
        return seal.ext.newCmdExecuteResult(true);
      }

      if (val === '攻击' && playerData[userId].攻击动作 > 0) {
        playerData[userId].攻击动作--;
      } else if (val === '防御' && playerData[userId].防御动作 > 0) {
        playerData[userId].防御动作--;
      } else if (val === '特殊' && playerData[userId].特殊动作 > 0) {
        playerData[userId].特殊动作--;
      } else {
        seal.replyToSender(ctx, msg, '没有足够的动作或无效的动作。');
        return seal.ext.newCmdExecuteResult(true);
      }

      seal.replyToSender(
        ctx,
        msg,
        `剩余攻击动作：${playerData[userId].攻击动作}，防御动作：${playerData[userId].防御动作}，特殊动作：${playerData[userId].特殊动作}。`
      );

      if (
        playerData[userId].攻击动作 === 0 &&
        playerData[userId].特殊动作 === 0
      ) {
        seal.replyToSender(ctx, msg, '请输入 .cl 结束回合 来结束本回合。');
      }

      return seal.ext.newCmdExecuteResult(true);
    } else if (val === '结束回合') {
      if (!playerData[userId]) {
        seal.replyToSender(
          ctx,
          msg,
          '请先使用 .st num <人数> 设置人数，然后使用 .cl r 掷骰子。'
        );
        return seal.ext.newCmdExecuteResult(true);
      }

      playerData[userId].防御动作 = 0;
      playerData[userId].掷骰次数 = playerData[userId].人数 + 3;
      seal.replyToSender(ctx, msg, '回合结束，防御动作已清空。');
      return seal.ext.newCmdExecuteResult(true);
    } else {
      seal.replyToSender(ctx, msg, ruleText);
      return seal.ext.newCmdExecuteResult(true);
    }
  };

  ext.cmdMap['cl'] = cmdCL;
  ext.cmdMap['clg'] = cmdCL;
  ext.cmdMap['传令官'] = cmdCL;
}

main();
