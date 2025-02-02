<?php
/**
 * 开店星新零售管理系统
 * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开
 * @author 青岛开店星信息技术有限公司
 * @link https://www.kaidianxing.com
 * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.
 * @copyright 版权归青岛开店星信息技术有限公司所有
 * @warning Unauthorized deletion of copyright information is prohibited.
 * @warning 未经许可禁止私自删除版权信息
 */

namespace shopstar\services\creditShop\handler;

use shopstar\models\order\create\interfaces\HandlerInterface;
use shopstar\models\order\create\OrderCreatorKernel;

class CollectDataHandler implements HandlerInterface
{
    /**
     * 订单实体类
     * @var OrderCreatorKernel 当前订单类的实体，里面包含了关于当前你所需要的所有内容
     */
    public OrderCreatorKernel $orderCreatorKernel;

    /**
     * GoodsHandler constructor.
     * @param OrderCreatorKernel $orderCreatorKernel
     */
    public function __construct(OrderCreatorKernel &$orderCreatorKernel)
    {
        $this->orderCreatorKernel = $orderCreatorKernel;
    }

    /**
     * 订单信息挂载处理
     * @return void
     * @author 青岛开店星信息技术有限公司
     */
    public function processor()
    {
        // 组装各种信息
        // 发票相关
        $this->orderCreatorKernel->orderData['invoice_info'] = [];
        if ($this->orderCreatorKernel->isInvoiceSupport) {
            $this->orderCreatorKernel->orderData['invoice_info'] = [
                'title' => $this->orderCreatorKernel->inputData['invoice_title'],
                'is_electronic' => $this->orderCreatorKernel->inputData['invoice_is_electronic'],
                'is_company' => $this->orderCreatorKernel->inputData['invoice_is_company'],
                'number' => $this->orderCreatorKernel->inputData['invoice_number'],
                'address' => $this->orderCreatorKernel->inputData['invoice_address'] ?: '',
                'status' => 0 //是否开票
            ];
        }

        // 订单商品信息
        $orderGoodsInfo = [];

        $goodsData = $this->orderCreatorKernel->orderGoodsData[0];
        // 塞入订单商品信息中
        $orderGoodsInfo[] = [
            'title' => $goodsData['title'],
            'short_name' => $goodsData['short_name'],
            'sub_name' => $goodsData['sub_name'],
            'option_title' => $goodsData['option_title'],
            'thumb' => $goodsData['thumb'],
            'option_thumb' => $goodsData['option_thumb'],
            'goods_code' => $goodsData['goods_code'],
            'unit' => $goodsData['unit'],
            'type' => $goodsData['type'],
            'goods_id' => $goodsData['goods_id'],
            'stock' => $goodsData['stock'],
            'option_id' => $goodsData['option_id'],

            'shop_goods_id' => $goodsData['shop_goods_id'],
            'shop_option_id' => $goodsData['shop_option_id'],
            'shop_stock' => $goodsData['shop_stock'],

            'total' => $goodsData['total'],
            'price' => $goodsData['price'],
            'price_unit' => $goodsData['price_unit'],
            'price_original' => $goodsData['price_original'],
            'price_discount' => $goodsData['price_discount'],
            'credit' => $goodsData['credit'],
            'credit_unit' => $goodsData['credit_unit'],

            'extra' => $goodsData['extra'] ?? null,
            'ext_field' => $goodsData['ext_field'] ?? null,
            'auto_deliver' => $goodsData['auto_deliver'],
            'auto_deliver_content' => $goodsData['auto_deliver_content'],
            'plugin_identification' => $goodsData['plugin_identification'],
            'form_data' => $goodsData['form_data'],
            'form_status' => $goodsData['form_status'],
            'form_id' => $goodsData['form_id'],
            'virtual_account_id' => $goodsData['virtual_account_id'],
            'virtual_account_mailer_setting' => $goodsData['virtual_account_mailer_setting'],
            'is_all_verify' => $goodsData['is_all_verify'] ?: 0,
            'goods_unit' => $goodsData['goods_unit'],
        ];


        $this->orderCreatorKernel->orderData['goods_info'] = $orderGoodsInfo;

        // 合并订单相关字段
        $this->orderCreatorKernel->orderData['buyer_remark'] = (string)$this->orderCreatorKernel->inputData['buyer_remark'];
        $this->orderCreatorKernel->orderData['original_price'] = $goodsData['price_original'] + $this->orderCreatorKernel->orderData['dispatch_price'];
        $this->orderCreatorKernel->orderData['pay_price'] = (round2($goodsData['price'] + $this->orderCreatorKernel->orderData['dispatch_price'])) ?: 0;
        $this->orderCreatorKernel->orderData['pay_credit'] = $goodsData['credit'];

        //场景
        $this->orderCreatorKernel->orderData['scene'] = $this->orderCreatorKernel->inputData['scene'];

        //场景值
        $this->orderCreatorKernel->orderData['scene_value'] = $this->orderCreatorKernel->inputData['scene_value'];

        // 如果是确认订单，返回前端的 pay_price = pay_price + extra_pay_price 额外支付价格
        if ($this->orderCreatorKernel->isConfirm) {
            $this->orderCreatorKernel->orderData['pay_price'] += array_sum(array_values($this->orderCreatorKernel->orderData['extra_pay_price']));
        }
    }
}
