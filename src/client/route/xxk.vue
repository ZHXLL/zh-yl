<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="酒店" name="first">
    	
    	
    	<el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="活动名称">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="活动区域">
		    <el-select v-model="form.region" placeholder="请选择活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="活动时间">
		    <el-col :span="11">
		      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
		    </el-col>
		    <el-col class="line" :span="2">-</el-col>
		    <el-col :span="11">
		      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
		    </el-col>
		  </el-form-item>
		  
		</el-form>
    	
    	
    	
    	
    	
    	
    </el-tab-pane>
    <el-tab-pane label="机票" name="second">
    	
    	<el-form ref="form1" :model="form1" label-width="80px">
		  <el-form-item label="飞机票">
		    <el-input v-model="form1.name"></el-input>
		  </el-form-item>
		  <el-form-item label="选择机场">
		    <el-select v-model="form1.region" placeholder="请选择活动区域">
		      <el-option label="机场一" value="shanghai"></el-option>
		      <el-option label="机场二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
				  
		  <el-form-item label="要票吗">
		    <el-radio-group v-model="form.resource">
		      <el-radio label="要了"></el-radio>
		      <el-radio label="买了"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  
		</el-form>
    	
    </el-tab-pane>
    <el-tab-pane label="火车票" name="fourth">
    	
    	
    	<el-form ref="form2" :model="form2" label-width="80px">
		  <el-form-item label="活动名称">
		    <el-input v-model="form2.name"></el-input>
		  </el-form-item>
		 
		  <el-form-item label="活动时间">
		    <el-col :span="11">
		      <el-date-picker type="date" placeholder="选择日期" v-model="form2.date1" style="width: 100%;"></el-date-picker>
		    </el-col>
		    <el-col class="line" :span="2">-</el-col>
		    <el-col :span="11">
		      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form2.date2" style="width: 100%;"></el-time-picker>
		    </el-col>
		  </el-form-item>
		  
		</el-form>
    	
    	
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form1: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form2: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>