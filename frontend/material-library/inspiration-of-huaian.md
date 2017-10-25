地点：江苏淮安

对象：某所高职院校为主的计算机相关专业教师

内容：Python/Pandas/Matplotlib/SKLearn

作为企业，举办活动的目标主要是“推销产品”，特别是“潜在客户”。

作为学校，参与活动的目的主要是“响应政策”，特别是“部司背景”。

而对于“企业讲师”和“学校教师”这两种不同体质下的“雇员”，主要还是做知识交流的。

此次培训，笔者的身份是“企业讲师”。

笔者把“学校教师”分为这么几类：

- 散心型
- 好奇型
- 工作型
- 兴趣型

从实际情况看，占比还比较均衡。粗略统计下，总共大约三十人。

作为“企业讲师”，笔者考虑的是，如何尽可能把课讲得生动，满足后三类、尽量转化第一类。

教育界经常挂在嘴边的“有教无类、寓教于乐”的口号，实则鲜有达者。

笔者此次就竭力尝试，面对的就是“各种类型”、要做的就是“发掘乐趣”。

---
# 设计 #

- 介绍自己贴近主题：和主讲内容有关系

	虽说不会杀猪的会计就做不了好程序员，毕竟术业有专攻，多数人还是愿意跟着专业人士学习。

- 佩戴证件突出角色：像黑暗中的萤火虫

	![][0]

- 采用行当谚语入题：有名言不用者犯傻

	![][1]

- 背景故事引人入胜：应用前景一片光明
  - 大事情做引子并敢于调侃自己（摘自那个秀才的《Python半深入讲义》）

	说起1991年，绝对是不平凡的！这一年：

		NelsonMandela发表国会讲话
		GulfWar爆发
		WiltChamberlain退役
		EvanderHolyfield和MikeTyson拳赛未果（JamesDouglas昙花一现）
		DiegoMaradona被查违禁药物
		AungSanSuuKyi获得诺贝尔和平奖
		HedyLamarr盗窃商店被抓
		JuliaRoberts取消婚约
		MichaelJordan首获总决赛最有价值球员
		TedTurner成为时代周刊年度人物
		WhitneyHouston和MikeJackson获得美国公告牌音乐奖
		HerMajestyQueenElizabethII成为第一个在美国国会演讲的英国君主
		BorisYeltsin当选俄罗斯联邦第一任总统
		NorodomSihanouk结束流亡返回金边
		Zionism被联合国取消种族主义和种族歧视的定性
		SovietUnion解体
		China和Vietnam恢复外交关系
		Mcdonald’s第一家北京店开业
		TimBernersLee发万维网论文
		Linux横空出世
	还有：

		Python破壳
		那个秀才经常夜里画地图

  - [FeiYang](http://github.com/nagexiucai/feiyang "feiyang")（短小精悍的项目）

- 构思类比增强趣味：一例胜过千言万语

		class Person(object):

			'''
				人的基础类定义
			'''

			def __init__(self, name, _phonenumber, __id):
				self.name = name
				self._phonenumber = _phonenumber
				self.__id = __id

			def Walk(self): # Q：人是怎么走的呢？
				print "one two one~" # A：一二一（给出一个包袱）

			def Eat(self): # Q：人是怎么吃的呢？
				print "bia-ji" # A：Bia-Ji

		class ChairMan(Person):

			def Order(self): # Q：领导有什么特质？
				print "who is that guy" # A：发号施令（那个谁去把X干了）

			def Eat(self): # Q：主席怎么吃的呢？
				print "big dinner" # A：大餐

		class MaNong(Person):

			def Eat(self): # Q：码农怎么吃的呢？
				print "half-full" # A：半饱

		class SuperMan(ChairMan, MaNong):

			def Fly(self) # Q：既是领导又会写代码的超人怎么飞？
				print "hula~" # A：呼啦-呼啦

- 搭配着装相得益彰：挖空心思吸引眼球

	![][2]

- 穿插板书缓解疲劳：换个姿势再来一次

	![][3]

	长期盯着显示屏，不论哪一方，都会疲劳。挑重点的地方，可以用胶片展示过，再用板书强调一遍。让大家都活动下眼睛。

- 跟读编码加深记忆：该天真时莫要成熟

	咿咿呀呀~要别人谦虚对待新知识、自己就要像发现新大陆一样好奇地表达。

- 理论实践穿插行进：别让对方置身事外

	别让众人闲着，讲解、提问、操练、鼓励、纠正，一副“包教包会”的样子。

- 构造需求布局场景：叫用户提问咋那啥

	![][4]

	还记得《卖拐》么？当一个人的需求被激发了，自己会就近就快寻求解决方案，只要合理，可以是企业的产品。

	当讲述完Python基础，就有人提问“从哪儿去找学习材料”，某吧就有呀！

	当讲述完大数据赛真题，就有人提问“回家后咋部署环境”，某SaaS就有啊！

	当活动快结束了，就有人提问“如何在实验室做这种虚拟化比赛”，只要顺手指向角落里的服务器。

# 误区 #

- 过分依赖PPT等信息化设备
- 埋头写板书
- 讲段子就是不严肃
- 只讲理论不操练
- 不主动发起讨论或搜取反馈

---
[0]: ./illustration/teaching/0.jpg
[1]: ./illustration/teaching/1.jpg
[2]: ./illustration/teaching/2.jpg
[3]: ./illustration/teaching/3.jpg
[4]: ./illustration/teaching/4.jpg