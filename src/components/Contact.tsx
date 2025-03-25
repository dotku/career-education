import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent(`新咨询预约: ${name}`);
      const body = encodeURIComponent(`
姓名: ${name}
电话: ${phone}
咨询内容: ${message}
      `);
      const mailtoUrl = `mailto:carrie.lan998@gmail.com,weijingjaylin+careereducation@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoUrl;

      setSubmitStatus({
        type: "success",
        message: "邮件客户端已打开，请发送邮件完成预约。",
      });
      form.reset();
    } catch {
      setSubmitStatus({
        type: "error",
        message: "打开邮件客户端失败，请直接发送邮件至 carrie.lan998@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">电话咨询</h3>
                <p className="text-gray-600">17318011997</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">微信咨询</h3>
                <p className="text-gray-600">HELENLAN998</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">办公地址</h3>
                <p className="text-gray-600">
                  深圳市福田区福华一路 98 号卓越大厦 1903
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">工作时间</h3>
                <p className="text-gray-600">周一至周五：9:00-18:00</p>
                <p className="text-gray-600">周六：10:00-16:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">预约免费咨询</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  咨询内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "提交中..." : "提交预约"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
