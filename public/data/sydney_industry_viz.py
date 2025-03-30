import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

# 设置全局字体为 "Hiragino Sans GB"
plt.rcParams['font.sans-serif'] = ['Hiragino Sans GB']
# 解决负号显示为方块的问题
plt.rcParams['axes.unicode_minus'] = False

# 定义行业标签
labels = ['金融与保险业', '专业、科学与技术服务业', '教育与培训业', '医疗与社会援助服务业',
          '零售贸易业', '制造业', '住宿与餐饮服务业', '信息媒体与电信业', '建筑业', '其他行业']

# 对应的经济占比数据（百分比形式）
sizes = [20, 15, 10, 12, 9, 8, 7, 6, 5, 8]

# 定义每个部分的颜色
colors = ['#ff9999','#66b3ff','#99ff99','#ffcc99','#c2c2f0','#ffb3e6','#c2f0c2','#ff6666','#ffcc66','#c2f0f0']

# 绘制饼状图
plt.figure(figsize=(10, 8))
plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
plt.title('2024年悉尼各行业经济占比', fontsize=16, pad=20)
plt.axis('equal')  # 保证饼图是圆的

# 保存图片
plt.savefig('sydney_industry_distribution_2024.png', bbox_inches='tight', dpi=300)
plt.close()
