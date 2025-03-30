import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  TooltipItem
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
  '金融与保险业',
  '专业、科学与技术服务业',
  '教育与培训业',
  '医疗与社会援助服务业',
  '零售贸易业',
  '制造业',
  '住宿与餐饮服务业',
  '信息媒体与电信业',
  '建筑业',
  '其他行业'
];

const sizes = [20, 15, 10, 12, 9, 8, 7, 6, 5, 8];

const colors = [
  '#FF9999', // 红粉色
  '#66B3FF', // 天蓝色
  '#99FF99', // 浅绿色
  '#FFCC99', // 橙色
  '#FF99CC', // 粉色
  '#99CCFF', // 淡蓝色
  '#FF99FF', // 紫粉色
  '#FFFF99', // 黄色
  '#99FFCC', // 青绿色
  '#FFB366'  // 橙褐色
];

export const IndustryPieChart: React.FC = () => {
  const data: ChartData<'pie'> = {
    labels: labels,
    datasets: [
      {
        data: sizes,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('FF', 'CC')),
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12,
            family: "'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
          },
          padding: 15
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'pie'>) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          }
        },
        titleFont: {
          family: "'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
        },
        bodyFont: {
          family: "'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
        }
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-yellow-900 text-center">
        2024年悉尼各行业经济占比
      </h3>
      <div className="aspect-[4/3] w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};
