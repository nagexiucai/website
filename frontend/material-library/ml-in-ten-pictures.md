原文是[Koç University](https://www.ku.edu.tr/en/research/laboratories "土耳其Koç大学")的[Deniz Yuret](http://www.denizyuret.com/ "Deniz Yuret")早在2014年初发表的一篇个人博客。[那个秀才](http://zhouguoqiang.cn/ "作者")觉得不错，征得作者同意并转发于此与诸公分享！

以下十张图用来阐明ML中常见的理论或算法。

# 测试误差和训练误差 #
[为何低训练误差不总是好事？][0]

![](./illustration/ml-in-ten-pictures/0.model-complexity.png)

# 欠拟合和过拟合 #
[调整M值，通过红色曲线拟合绿色曲线。][1]

![](./illustration/ml-in-ten-pictures/1.under-and-over-fitting.png)

# [奥卡姆剃刀](./奥卡姆剃刀.md "Occam's Razor") #
[为何Bayesian推理体现Occam的Razor？][2]

本图给出复杂模型是小概率的基本直觉。

水平轴代表可能的数据集空间D。

贝叶斯定理以预测到的数据占发生的比例多少奖励模型。这些预测按D上的归一化概率分布量化。给定数据概率的模型Hx，P(D|Hx)被称作Hx的证明（evidence）。一个简单的模型Hi仅构造有限范围的预测，记为P(D|Hi)；更强大点的模型Hii，拥有，例如比Hi更多自由参数，可以预测更大量的数据集。这意味着，不管怎样，Hii对Ci区域数据集的预测不如Hi擅长。假设两个模型分配了相等的先验概率，则，如果数据集落在区域Ci，稍弱的模型Hi将是更有可能的模型。

![](./illustration/ml-in-ten-pictures/2.occam's-razor.png)

# 特征组合 #
[为什么集体相关的特征看起来个体无关、为什么线性方法会失败？][3]

![](./illustration/ml-in-ten-pictures/3.feature-combination.png)

## 无关特征 ##
为什么无关特征让K最近邻、聚类这种方法很受伤。

本图左侧显示在垂直轴划分很好的两个类。

本图右侧添加无关水平轴损坏聚类并使很多点成为相反类的最近邻。

![](./illustration/ml-in-ten-pictures/4.irrelevant-features.png)

# 基本函数 #
[非线性基础函数把一个没有线性边界的低纬度分类问题变成一个有线性边界的高纬度问题。][6]

本图展示一个一维非线性分类问题转换成二维可线性分割问题（y=f(x)->y-f(x,x\*x)）。

![](./illustration/ml-in-ten-pictures/5.basis-functions.png)

# 有识别力的（discriminative）对比有生产力的（generative） #
[为什么有识别力的学习可能比有生产力的学习更简单？][1]

本图所示两个类的分类条件密度（class-conditional densities），单一的输入变量x（左侧）和对应的后验概率（右侧）。注意，分类条件密度的左手模式P(x|Ci)，在左侧显示呈蓝色，对后验概率无效；右侧垂直的绿色直线显示的x上的决策边界产生最小误分类率。

![](./illustration/ml-in-ten-pictures/6.discriminative-vs-generative.png)

# 损失函数 #
[学习算法可以看作是优化不同的损失函数。][1]

画出用于SVM的“铰链（hinge）”误差函数，蓝色；一道画出用于逻辑回归（logistic regression）的误差函数，通过“1/ln(2)”因子变形后通过(0,1)坐标，红色。*误分类误差，黑色；平方误差，绿色*。

![](./illustration/ml-in-ten-pictures/7.loss-function.png)

# 最小二乘的几何图形（Geometry of Least Squares） #
[N维最小二乘的几何图形以两个预测器回归。][0]

结果向量y在xi/xii向量组限定的超平面正交投影。y'投影代表最小二乘预测的向量。

![](./illustration/ml-in-ten-pictures/8.geometry-of-least-squares.png)

# 稀疏 #
[为何套索（Lasso）（Li正则化或拉普拉斯先验）提供稀疏解决方案（有更多零的权重向量）？][0]

左侧的套索估计图片和右侧的脊回归（ridge regression）。

显示误差的轮廓（contours）和约束函数（constraint functions）。

兰色实线区域是轮廓，分别是|Betai|+|Betaii|<=ti、Betai\*Betai+Betaii\*Betaii<=tii），同时，红色椭圆（ellipse）是最小二乘误差函数的轮廓。

![](./illustration/ml-in-ten-pictures/9.sparsity.png)

---
[0]: https://web.stanford.edu/~hastie/ "ElemStatLearn"
[1]: https://www.microsoft.com/en-us/research/people/cmbishop/ "PRML"
[2]: http://www.inference.org.uk/itila/ "ITILA"
[3]: http://clopinet.com/isabelle/Projects/ETH/ "Isabelle Guyon"
[6]: https://www.autonlab.org/tutorials/svm.html "SVM Tutorial"